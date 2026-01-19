const User = require("../models/user");
const Order = require("../models/Order");
const excelJS=require("exceljs");

async function handleadminDashboard(req, res) {
  try {
    const totalUsers = await User.countDocuments({
      role: { $ne: "admin" }
    });

    const paidOrdersCount = await Order.countDocuments({
      status: "paid",
    });

    const donationSum = await Order.aggregate([
      { $match: { status: "paid" } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    const totalDonationAmount = donationSum[0]?.totalAmount || 0;

    res.render("adminDashboard", {
      totalUsers,
      paidOrdersCount,
      totalDonationAmount: totalDonationAmount / 100, // INR
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}

async function handleviewallregistrations(req, res) {
  try {
    const { name, fromDate, toDate } = req.query;
// filter to exclude admin users
    let filter = {
      role: { $ne: "admin" }
    };
        if (name) {
      filter.name = { $regex: name, $options: "i" };
    }
    if (fromDate || toDate) {
      filter.createdAt = {};
      if (fromDate) filter.createdAt.$gte = new Date(fromDate);
      if (toDate) filter.createdAt.$lte = new Date(toDate);
    }
    const users = await User.find(filter).sort({ createdAt: -1 });

    res.render("viewAllRegistrations", {
      users,
      name,
      fromDate,
      toDate
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
}

async function handleviewsuccessfulldonations(req, res){
  try {
    const paidOrders = await Order.find({ status: "paid" })
      .populate("userEmail", "email name") // get email & name
      .sort({ createdAt: -1 });

    res.render("successfulDonations", { orders: paidOrders });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

async function handleviewalldonations  (req, res)  {
  try {
    // Fetch all orders, populate user email
    const allOrders = await Order.find({})
      .populate("userEmail", "email name") // get email & name
      .sort({ createdAt: -1 }); // latest first

      const donationSum = await Order.aggregate([
      { $match: { status: "paid" } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    const totalDonationAmount = donationSum[0]?.totalAmount || 0;

    res.render("allDonations", { orders: allOrders,totalDonationAmount: totalDonationAmount / 100, });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
}

//EXPORT USER
async function handleexportUser(req,res){
try{
  const workbook=new excelJS.Workbook();
  const worksheet=workbook.addWorksheet("My Users");
  worksheet.columns=[
    {header:"S.No",key:"s_no"},
    {header:"Name",key:"name"},
    {header:"Email",key:"email"},
    {header:"Role",key:"role"},
    {header:"Donations",key:"donations"},
    
  ];

  let counter=1;

  const userData=await User.find({});
   userData.forEach((user)=>{
    user.s_no=counter;
    worksheet.addRow(user);
    counter++;
  })

  worksheet.getRow(1).eachCell((cell)=>{
    cell.font={bold:true};
  })

  res.setHeader(
    "Content-Type",
    "application/vnd.openxmlformats-officedocument.spreadsheatml.sheet"
  );

  res.setHeader("Content-Disposition",`attachment;filename=users.xlsx`);

  return workbook.xlsx.write(res).then(()=>{
    res.status(200);
  })
}catch(error){
  console.log("ERROR DURING EXPORTING ",error.message)
}
}
module.exports = { handleadminDashboard,handleviewallregistrations,handleviewsuccessfulldonations,handleviewalldonations,handleexportUser};

const User=require("../models/user")
const Order=require("../models/Order")

async function handleadminDashboard(req, res) {
  try {
    const totalUsers = await User.countDocuments();

    const paidOrdersCount = await Order.countDocuments({
      status: "paid"
    });

    const donationSum = await Order.aggregate([
      { $match: { status: "paid" } },
      {
        $group: {
          _id: null,
          totalAmount: { $sum: "$amount" }
        }
      }
    ]);

    const totalDonationAmount = donationSum[0]?.totalAmount || 0;

    res.render("adminDashboard", {
      totalUsers,
      paidOrdersCount,
      totalDonationAmount: totalDonationAmount / 100 // INR
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
}



module.exports={handleadminDashboard}
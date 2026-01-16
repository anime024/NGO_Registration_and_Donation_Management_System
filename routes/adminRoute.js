const express=require("express");
const {checkForAuhentication,requireadmin}=require("../middleware/auth")
const adminRouter=express.Router();
const {handleadminDashboard}=require("../controllers/adminController")
const User=require("../models/user")
const Order=require("../models/Order")



adminRouter.get("/dashboard",checkForAuhentication,requireadmin,handleadminDashboard)
adminRouter.get("/viewallregistrations", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.render("viewAllRegistrations", {
      users
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

adminRouter.get("/viewsuccessfulldonations", async (req, res) => {
    try {
        const paidOrders = await Order.find({ status: "paid" })
            .populate("userEmail", "email name") // get email & name
            .sort({ createdAt: -1 });

        res.render("successfulDonations", { orders: paidOrders });
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

adminRouter.get("/viewalldonations", async (req, res) => {
    try {
        // Fetch all orders, populate user email
        const allOrders = await Order.find({})
            .populate("userEmail", "email name") // get email & name
            .sort({ createdAt: -1 }); // latest first

        res.render("allDonations", { orders: allOrders });

    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});
module.exports=adminRouter;
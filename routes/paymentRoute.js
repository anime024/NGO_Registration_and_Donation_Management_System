const express = require("express");
const {
  handleCreateOrder,
  handleSuccess,
  handleVerifyPayment,
} = require("../controllers/paymentController");
const paymentRouter = express.Router();

// Function to read data from JSON file

// Route to handle order creation
paymentRouter.post("/create-order", handleCreateOrder);

// Route to serve the success page
paymentRouter.get("/payment-success", handleSuccess);

// Route to handle payment verification
paymentRouter.post("/verify-payment", handleVerifyPayment);

module.exports = paymentRouter;

const { findOneAndUpdate } = require("../models/Order");
const { getUser } = require("../services/auth");
const User = require("../models/user");

async function updateUserDonations(req, res, next) {
  const authorizationToken = req.cookies.token;
  const user = getUser(authorizationToken);
  const updatedUser = await User.findOneAndUpdate(
    { email: user.email },
    {
      status: "order-created",
      payment_id: razorpay_payment_id,
    },
  );
  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }
}

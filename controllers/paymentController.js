const Razorpay = require("razorpay");
const Order = require("../models/Order");
const { getUser } = require("../services/auth");
const User = require("../models/user");
require("dotenv").config({ path: "../.env" });
let rzp = new Razorpay({
  key_id: process.env.KEYID, // your `KEY_ID`
  key_secret: process.env.KEYSECRET, // your `KEY_SECRET`
});

async function handleCreateOrder(req, res) {
  try {
    const { amount, currency, receipt, notes } = req.body;
    const options = {
      amount: amount * 100, // Convert amount to paise
      currency,
      receipt,
      notes,
    };

    const order = await rzp.orders.create(options);

    // ADD ORDER TO DB
    const orderCreated = await Order.create({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
      receipt: order.receipt,
      status: "created",
      userEmail: req.user.email,
    });
    const authorizationToken = req.cookies.token;
    const user = getUser(authorizationToken);
    const updatedUser = await User.findOneAndUpdate(
      { email: user.email },
      {
        $push: {
          donations: {
            orderId: order.id,
            amount: order.amount / 100, // convert paise → rupees
            currency: order.currency,
            status: "created",
          },
        },
      },
      { new: true },
    );

    res.json(order); // Send order details to frontend, including order ID
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating order");
  }
}

function handleSuccess(req, res) {
  res.render("success");
}

const crypto = require("crypto");
async function handleVerifyPayment(req, res) {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const body = razorpay_order_id + "|" + razorpay_payment_id;

  const expectedSignature = crypto
    .createHmac("sha256", "ck6bislOlD4jSyxTgscwWCBi")
    .update(body)
    .digest("hex");

  if (expectedSignature === razorpay_signature) {
    // update order
    const order = await Order.findOneAndUpdate(
      { order_id: razorpay_order_id },
      {
        status: "paid",
        payment_id: razorpay_payment_id,
      },
    );
    await User.updateOne(
      { "donations.orderId": razorpay_order_id },
      {
        $set: {
          "donations.$.status": "paid",
        },
      },
    );

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    console.log("✅ Payment verified");
    return res.json({ status: "ok" });
  } else {
    console.log("❌ Payment verification failed");
    return res.status(400).json({ status: "failed" });
  }
}

module.exports = { handleCreateOrder, handleSuccess, handleVerifyPayment };

require("dotenv").config({path: "./.env"})
const express=require("express");
const path=require("path");
const cors =require("cors")
const mongoose=require("mongoose");
const connectDB= require("./db/index")

const userRouter=require("./routes/userRoute");
const staticRouter=require("./routes/staticRouter");
const cookieParser = require("cookie-parser");
const { attachUser } = require("./middleware/auth");
const Razorpay = require('razorpay')
const { validateWebhookSignature } = require('razorpay/dist/utils/razorpay-utils');
const fs = require("fs");
const paymentRouter=require("./routes/paymentRoute")
const adminRouter=require("./routes/adminRoute")




const app=express();
const PORT =process.env.PORT || 8000;

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(cookieParser());



app.use(attachUser);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.isLoggedIn = !!req.user;
    next();
});

app.use("/user",userRouter);
app.use("/",staticRouter);
app.use("/payment",paymentRouter);
app.use("/admin",adminRouter);



connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  });

// health check
app.get("/health", async (req, res) => {
  // Mongoose connection states: 0 = disconnected, 1 = connected, 2 = connecting
  const isDatabaseConnected = mongoose.connection.readyState === 1;

  const healthStatus = {
    status: isDatabaseConnected ? "UP" : "DOWN",
    timestamp: new Date(),
    uptime: process.uptime(),
    database: isDatabaseConnected ? "Connected" : "Disconnected",
    environment: process.env.NODE_ENV || "development",
  };

  if (isDatabaseConnected) {
    res.status(200).json(healthStatus);
  } else {
    res.status(503).json(healthStatus);
  }
});
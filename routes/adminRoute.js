const express = require("express");
const { checkForAuhentication, requireadmin } = require("../middleware/auth");
const adminRouter = express.Router();
const {
  handleadminDashboard,
  handleviewallregistrations,handleviewsuccessfulldonations,handleviewalldonations,handleexportUser
} = require("../controllers/adminController");
const User = require("../models/user");
const Order = require("../models/Order");

adminRouter.get(
  "/dashboard",
  checkForAuhentication,
  requireadmin,
  handleadminDashboard
);
adminRouter.get("/viewallregistrations", handleviewallregistrations);

adminRouter.get("/viewsuccessfulldonations", handleviewsuccessfulldonations);

adminRouter.get("/viewalldonations", handleviewalldonations);
adminRouter.get("/exportUser", handleexportUser);
module.exports = adminRouter;

const express = require("express");
const { checkForAuhentication, requireadmin } = require("../middleware/auth");
const adminRouter = express.Router();
const {
  handleadminDashboard,
  handleviewallregistrations,handleviewsuccessfulldonations,handleviewalldonations,handleexportUser
} = require("../controllers/adminController");


adminRouter.get(
  "/dashboard",
  checkForAuhentication,
  requireadmin,
  handleadminDashboard
);
adminRouter.get("/viewallregistrations",checkForAuhentication,
  requireadmin, handleviewallregistrations);

adminRouter.get("/viewsuccessfulldonations",checkForAuhentication,
  requireadmin, handleviewsuccessfulldonations);

adminRouter.get("/viewalldonations",checkForAuhentication,
  requireadmin, handleviewalldonations);
adminRouter.get("/exportUser",checkForAuhentication,
  requireadmin, handleexportUser);
module.exports = adminRouter;

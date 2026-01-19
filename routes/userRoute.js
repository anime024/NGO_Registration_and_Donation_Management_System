const express = require("express");
const {
  handlelogin,
  handlesignUp,
  handledashBoard,
  handleloginSuccess,
  handleConnectionBetweenUserAndPaymentPage,
  handleLogout,
} = require("../controllers/userController");
const { checkForAuhentication } = require("../middleware/auth");
const userRouter = express.Router();

userRouter.post("/login", handlelogin);
userRouter.post("/signUp", handlesignUp);
userRouter.get("/dashBoard", checkForAuhentication, handledashBoard);

userRouter.get("/loginsuccess", checkForAuhentication, handleloginSuccess);
userRouter.get("/payment", handleConnectionBetweenUserAndPaymentPage);
userRouter.get("/logout", handleLogout);

module.exports = userRouter;

const express=require("express");
const {handlelogin,handlesignUp,handledashBoard,handleloginSuccess,handleConnectionBetweenUserAndPaymentPage,handleLogout}=require("../controllers/userController")
const {checkForAuhentication,restrictTo}=require("../middleware/auth");
const userRouter=express.Router();



userRouter.post("/login",handlelogin);
userRouter.post("/signUp", handlesignUp);
userRouter.get("/dashBoard",checkForAuhentication,handledashBoard);
userRouter.get("/thankYou",checkForAuhentication,(req,res)=>{
    res.json({message:"Thank You After Authorized"});
})
userRouter.get("/loginsuccess",checkForAuhentication,handleloginSuccess)
userRouter.get("/payment",handleConnectionBetweenUserAndPaymentPage)
userRouter.get("/logout",handleLogout)



module.exports=userRouter;

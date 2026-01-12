const express=require("express");
const {handlelogin,handlesignUp,handledashBoard}=require("../controllers/userController")
const {checkForAuhentication,restrictTo}=require("../middleware/auth");
const userRouter=express.Router();



userRouter.post("/login",handlelogin);
userRouter.post("/signUp", handlesignUp);
userRouter.get("/dashBoard",checkForAuhentication,handledashBoard);
userRouter.get("/thankYou",checkForAuhentication,(req,res)=>{
    res.json({message:"Thank You After Authorized"});
})



userRouter.get("/loginDone",(req,res)=>{
    if(!req.cookies.token){
        res.json({message:"NO LOGIN"})
    }
    else
         res.json({message:" LOGIN done",token:req.cookies.token});
})

module.exports=userRouter;

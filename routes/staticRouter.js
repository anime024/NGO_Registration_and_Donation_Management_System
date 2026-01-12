const express=require("express");

const staticRouter=express.Router();


staticRouter.get("/",(req,res)=>{
    res.render("homePage");
})


staticRouter.get("/login",(req,res,next)=>{
    console.log("GET LOGIN");
    res.render("login");
})

staticRouter.get("/signUp",(req,res,next)=>{
    res.render("signUp");
        console.log("GET signup");

})

module.exports=staticRouter;
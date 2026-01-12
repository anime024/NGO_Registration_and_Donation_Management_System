
const User=require("../models/user");

const {setUser}=require("../services/auth")

async function handlelogin(req,res){
    const {email,password}=req.body;
    const result=await User.matchPassword(email,password);

    if(!result.success){
        return res.status(401).json({message:result.message});
    }   
        
            console.log("USER MATCHED FOUND ",result.user);
            const token=setUser(result.user);
             res.cookie("token",token);
    res.redirect("/");
}

async function handlesignUp(req,res){
    const {fullName,email,password}=req.body;
    const user=await User.create({
        name:fullName,
        email:email,
        password:password
    });
    console.log(`USER IS ADDED IN MONGOOSE AND USER IS ${user}`);
    console.log("FROM SIGNUP ",req);
    res.redirect("/");
}

function handledashBoard(req,res)
{
    res.render("dashBoard");
}

module.exports={handlelogin,handlesignUp,handledashBoard}
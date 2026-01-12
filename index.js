const express=require("express");
const path=require("path");
const mongoose=require("mongoose");
const userRouter=require("./routes/userRoute");
const staticRouter=require("./routes/staticRouter");
const cookieParser = require("cookie-parser");
const { attachUser } = require("./middleware/auth");


const app=express();

mongoose.connect("mongodb://127.0.0.1:27017/nss-pro")
.then(()=>{console.log("mongoose connected succesfully")})
.catch((err)=>{console.log("error occured while connecting mongoose ,", err)});

app.use(express.urlencoded({extended:true}));
app.set("view engine","ejs");
app.set("views",path.resolve("./views"));
app.use(cookieParser());

const PORT=8000;

app.use(attachUser);

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    res.locals.isLoggedIn = !!req.user;
    next();
});

app.use("/user",userRouter);
app.use("/",staticRouter);

app.listen(PORT,()=>{
    console.log(`server started at port ${PORT}`);
})
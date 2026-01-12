const mongoose=require("mongoose");
const {createHmac,randomBytes}=require("crypto");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    salt:{
        type:String,
    },
    password:{
        type:String,
        require:true,
    },
    role:{
        type:String,
        required:true,
        default:"NORMAL",
    }
});


UserSchema.pre("save",async function(next){
    const user=this;
    if(!user.isModified("password")) return next();

    const salt=randomBytes(16).toString("hex");
    const hashedPassword=createHmac("sha256",salt)
    .update(user.password)
    .digest("hex");

    this.salt=salt;
    this.password=hashedPassword;
});

UserSchema.static("matchPassword",async function(email,password){
    const user=await this.findOne({email});
    if(!user) {
        return {success:false,message:"User not found"};
    } 

    const salt=user.salt;
    const hashedPassword=user.password;

    const userProvidedHash=createHmac("sha256",salt)
    .update(password)
    .digest("hex");

    if(userProvidedHash!==hashedPassword)
    {
        return {success:false,message:"password not matched"};        
    }
    else
    {
        const userObj=user.toObject();
        delete userObj.password;
        delete userObj.salt;
        return {success:true,user:userObj};

    }
         

})

const User=mongoose.model("User",UserSchema);

module.exports=User;
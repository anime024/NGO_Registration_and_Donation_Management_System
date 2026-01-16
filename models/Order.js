const mongoose=require("mongoose");

const orderSchema=new mongoose.Schema({
    order_id:{
        type:String,
        required:true,
        unique:true,
    },
    amount:{
        type:Number,
        required:true,
    },
    currency:{
        type:String,
        default:"INR",
    },
    receipt:{
        type:String,
    },
    status:{
        type:String,
        enum:["created","paid"],
        default:"created"
    },
    payment_id:{
        type:String,
    },
    userEmail: {
        type: String,
    }
},{timestamps:true});

module.exports=mongoose.model("Order",orderSchema);
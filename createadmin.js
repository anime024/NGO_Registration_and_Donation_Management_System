const mongoose = require('mongoose');
const User = require("./models/user"); // Path to your User model
require('dotenv').config();

const promoteToAdmin = async (email) => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Use your .env variable
    
    const result = await User.findOneAndUpdate(
      { email: email }, 
      { role: 'admin' }, 
      { new: true }
    );

    if (result) {
      console.log(`Success! ${email} is now an Admin.`);
    } else {
      console.log("User not found.");
    }
  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.disconnect();
  }
};

// Replace with your registered email
promoteToAdmin('dummy@gmail.com');
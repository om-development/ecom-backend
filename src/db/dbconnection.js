const mongoose = require("mongoose");

const dbConnection = async() => {
    try{
    await mongoose.connect(process.env.DATABASE_URI, { ssl: true });
    console.log("database connected");
    }catch(error){
        console.error(error.message);
        process.exit(1);
    }
    
}

module.exports = dbConnection;
const mongoose = require("mongoose");

async function connectDB(){
    try {
        await mongoose.connect(`${process.env.MONGO_URI}/interview-master`);
        console.log("Connected to DB")
    } catch (err) {
        console.log(err,"Error connecting to DB")
        console.log(process.env.MONGO_URI)
    }
}

module.exports = connectDB;
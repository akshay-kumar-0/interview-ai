require("dotenv").config({quiet:true})
const app = require('./app')
const connectDB = require('./src/config/database');

connectDB();

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})
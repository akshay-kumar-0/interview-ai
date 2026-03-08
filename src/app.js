const express = require("express");
const cookieParser = require("cookie-parser")

const app = express();

app.use(express.json()); //. allow to read data in req.body
app.use(cookieParser());

// require all the routes  here
const authRouter = require("./routes/auth.routes");

app.use("/api/auth", authRouter)



module.exports = app
const express = require("express");
const cookieParser = require("cookie-parser")
const cors = require("cors");
const app = express();

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json()); //. allow to read data in req.body
app.use(cookieParser()); //. allow to read cookies in req.cookies

// require all the routes  here
const authRouter = require("./src/routes/auth.routes");

app.use("/api/auth", authRouter)



module.exports = app
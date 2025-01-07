const express=require("express");
const app=express();
require("dotenv").config();

const bodyParser=require("body-parser");
app.use(bodyParser.json());

const personRoutes=require("./routes/personRoutes");

app.use("/person",personRoutes);
const menuRoutes=require("./routes/menuRoutes");
app.use("/menu",menuRoutes);
const db=require('./db');
const PORT=process.env.PORT||3000;

app.listen(PORT,() => {
    console.log("server is running on portNumber:",PORT);
});
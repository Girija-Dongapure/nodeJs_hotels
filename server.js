const express=require("express");
const app=express();

const bodyParser=require("body-parser");
app.use(bodyParser.json());

const personRoutes=require("./routes/personRoutes");

app.use("/person",personRoutes);
const menuRoutes=require("./routes/menuRoutes");
app.use("/menu",menuRoutes);
const db=require('./db');

app.listen(3000,() => {
    console.log("server is running on portNumber:3000");
});
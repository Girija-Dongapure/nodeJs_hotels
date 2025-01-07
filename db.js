const mongoose=require("mongoose");
require("dotenv").config();

//const mongodbUrl="mongodb://localhost:27017/mydb";
//const mongodbUrl="mongodb+srv://Girija:Giri2000@cluster0.tyd3i.mongodb.net/"
const mongodbUrl=process.env.MONGODB_URL

mongoose.connect(mongodbUrl)

const db=mongoose.connection

db.on('connected',() => {
    console.log("connected to mongoDB server")
})
db.on('error',(err) => {
    console.log("error while connecting to server",err)
})
db.on("disconnected", () => {
    console.log("disconnected");
})
module.exports=db;
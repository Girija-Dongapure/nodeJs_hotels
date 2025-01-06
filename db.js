const mongoose=require("mongoose");

const mongodbUrl="mongodb://localhost:27017/mydb";

mongoose.connect(mongodbUrl,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

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
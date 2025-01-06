const mongoose=require("mongoose");

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    work:{
        type:String,
        enum:["chef","waiter","manager"],
        required:true
    },
    salary:{
        type:Number,
        required:true,
    }
})
const Person=new mongoose.model("Person",personSchema);
module.exports=Person
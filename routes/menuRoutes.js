const express=require("express");
const router=express.Router();

const menuItem=require("../models/Menu");
const Person = require("../models/Person");

router.post("/",async(req,res) => {
    try{
        const data=req.body;
        const newMenuItem=new menuItem(data);

        const response=await newMenuItem.save();
        res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
router.get("/",async(req,res) => {
    try{
        const response=await menuItem.find();
        res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
router.get("/:tasteType",async(req,res) => {
    try{
        const tasteType=req.params.tasteType;
        if(tasteType==="sweet"||tasteType==="spicy"||tasteType==="sour"){
            const response=await menuItem.find({taste:tasteType})
            res.status(200).json(response)
        }
      else{
        res.status(404).json({error:"menu item not found"}); 
      }
    }catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
router.put("/:id",async(req,res) => {
    try{
        const menuId=req.params.id;
        const menuData=req.body;

        const response=await menuItem.findByIdAndUpdate(menuId,menuData,{
            new:true,
            runValidators:true
        })
        if(!response){
            res.status(404).json({error:"menu not found"});
        }
        res.status(200).json(response);
      }catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
router.delete("/:id",async(req,res) => {
    try{
        const menuId=req.params.id;
        const response=await menuItem.findByIdAndDelete(menuId);
        res.status(200).json({mesage:"deleted successfully"})
    }catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
module.exports=router
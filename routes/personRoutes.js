const express=require("express");
const router=express.Router();

const Person=require("../models/Person");
router.get("/",async(req,res) => {
    try{
        const data=await Person.find();
        res.status(200).json(data)
    }catch(err){
        res.status(500).json({error:"Internal server error"})
    }
})
router.post("/",async(req,res)=> {
   try
   { const data=req.body;

    const newPerson=new Person(data);
    const response=await newPerson.save();
    res.status(200).json(response);
}catch(err){
    res.status(500).json({error:"Internal server error"});
}


router.get("/:workType",async(req,res)=>{
  try
  {  const workType=req.params.workType;
    if(workType==="chef"||workType==="waiter"||workType==="manager"){
        const data=await Person.find({work:workType});
        res.status(200).json(data);
    }else{
        res.status(404).json({message:"person not found"});
    }
}catch(error){
    res.status(500).json({error:"Internal server error"})
}
})
})
router.put("/:id",async(req,res) => {
    try{
        const data=req.params.id;
        const personData=req.body;

        const response=await Person.findByIdAndUpdate(data,personData,{
            new:true,
            runValidators:true
        })
        if(!response){
          res.status(404).json({error:"Person not found"})
        }
        res.status(200).json(response)

    }catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
router.delete('/:id',async(req,res) => {
    try{
        const data=req.params.id;
        const response=await Person.findByIdAndDelete(data);
        res.status(200).json({message:"deleted successfully"})
    }catch(error){
        res.status(500).json({error:"Internal server error"})
    }
})
module.exports=router
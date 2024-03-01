const express=require("express");
const router=express.Router();
const bcrypt=require('bcrypt');
const [User,validate]=require('../models/user')

router.post('/',(req,res)=>{
    try{
        const{err}=validate(req.body)
        if(err)
        return res.status(400).send({message:err.detail[0].message});
        const user=await User.findOne({email:req.body.email})
        if(user)
        return res.status(409).send({message:"user already exist"});
        const salt=await bcrypt.genSalt(Number(process.env.SALT))
        const hashPassword=await bcrypt.hash(req.body.password,salt);
        await new User({...req.body,password:hashPassword}).save();
        res.status(200).send({message:"User created successfully"})

    }
    catch(err){
        res.status(500).send({message:"Internal Server Error"})
    }
})


module.exports=router

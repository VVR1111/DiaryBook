import mongoose from 'mongoose';

import DiaryBody from '../models/Diary.js';

export const  getInfo = async (req,res) => {
    try {
           const data= await DiaryBody.find({creator:req.userId});
        //    console.log(data);
           res.status(200).json(data);
       } catch (error) {
          res.status(404).json({message:error.message});
       }
} 

export const getOne =async(req,res)=>{
    const {id:_id}=req.params;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No Post Found with that id");
    const post=await DiaryBody.findById(_id);   
    // console.log(post);
    res.status(200).json(post);
}
export const createInfo =async (req,res)=>{
    const data=req.body;
    const date=new Date().toISOString();
    const d=date.substring(0,10);    
    const newData=new DiaryBody({...data,creator:req.userId,createdAt:d});
    try {
       await newData.save();
        res.status(201).json(newData);
    } catch (error) {
        res.status(409).json({message:error.message});
    }
}
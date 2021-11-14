import express, { application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import DiaryRoutes from './Routes/routes.js';
const app=express();
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}));
app.use(cors());
dotenv.config();
app.use('/diary', DiaryRoutes);
const PORT=process.env.PORT || 5000;
app.get('/',(req,res)=>{
    res.send("HEY WELCOME TO THE DIARYBOOK APIHUB ---  AUTHENTICATION REQUIRED FOR FURTHER ACCESS")
})


mongoose.connect(process.env.CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>app.listen(PORT,()=>console.log(`server running on port: ${PORT}`)))
    .catch((error)=>console.log(error.message));



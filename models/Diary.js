import mongoose from 'mongoose';


const DiarySchema= new mongoose.Schema({
    creator:String,
    title:String,
    body:String,
    tags:[String],
    createdAt:String
});

const DiaryBody=mongoose.model('DairyBody',DiarySchema);
export default DiaryBody;
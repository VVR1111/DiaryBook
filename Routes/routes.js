import express from 'express';
import { getInfo,createInfo,getOne } from '../controllers/diary.js';
import auth from '../middleware/auth.js';


const router=express.Router();

router.get('/',auth,getInfo);
router.get('/:id',auth,getOne);
router.post('/',auth,createInfo);

export default router;
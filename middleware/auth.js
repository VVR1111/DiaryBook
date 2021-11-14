import jwt from 'jsonwebtoken';

const auth = (req,res,next) => {
    try {
        // console.log(req.headers);
        
        const token=req.headers.authorization.split(' ')[1];       
        let decodedData;
        if(token)
        {
         decodedData=jwt.decode(token);
        //  console.log(decodedData);
         req.userId=decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;
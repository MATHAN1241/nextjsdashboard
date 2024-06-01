const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const token=req.headers.authorization?.split(' ')[1];
    try{
        const decod=jwt.verify(token,'secrets');
        res.json({message: "hello",userData:decod});
    }
    catch(error){
        res.status(401).json({message:'unauthorizedd'});
    }
});
module.exports = router;
const Cryptojs=require("crypto-js")//for encrypting password use crypyo js  
const jwt=require('jsonwebtoken')
const User =require("../model/user.model")
const loginHandler=async (req,res)=>{
    try{
        const user = await User.findOne({number:req.body.number})
        !user && res.status(401).json({message:"Invalid Mobile Number"})

        const decodedPassword=Cryptojs.AES.decrypt(user.password,process.env.PASSSWORD_SECRET_KEY).toString
        (Cryptojs.enc.Utf8);
        console.log(decodedPassword)
        decodedPassword!==req.body.password && res.status(401).json({message:"Incorrect Password"})

        const{password, ...rest}=user._doc

        const accessToken=jwt.sign({username:user.username},process.env.ACCESS_TOKEN)

        res.json({...rest,accessToken});
    }
    catch(err){
        console.log(err)
    }
}
module.exports=loginHandler

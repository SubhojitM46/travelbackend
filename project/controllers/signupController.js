const Cryptojs=require("crypto-js")//for encrypting password use crypyo js 
const User =require("../model/user.model")
const signupHandler=(async (req,res)=>{
    try{
        
        const newUser = new User({
            username:req.body.username,
            number:req.body.number,
            email:req.body.email,
            password: Cryptojs.AES.encrypt(req.body.password,process.env.PASSSWORD_SECRET_KEY).toString()
        })
        const savedUser = await newUser.save();//.save will add to the database
        res.status(201).json(savedUser)//201 :-success and add entry or entity showed
    }catch(err){
       res.status(500).json({message:"Error creating a user"})//500:-broke the server for only my request

    }
})
module.exports=signupHandler;
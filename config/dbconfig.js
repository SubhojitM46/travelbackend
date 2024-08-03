const mongoose = require('mongoose')

//connecting the database
const connectDB=async ()=>{
    try{
    await mongoose.connect(process.env.DATABASE_URI,{
        useUnifiedTopology:true,
        useNewURLParser:true
    })
}
catch(err){
    console.log(err);
}
}
module.exports=connectDB

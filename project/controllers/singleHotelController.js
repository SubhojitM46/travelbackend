const Hotel=require("../model/hotel.model")
const singlehotelHandler=async (req,res)=>{
    try{
        const {id}=req.params//{id:634983948r973ghsdg} destructuring of the parameter
        const hotel=await Hotel.findById(id)
        res.json(hotel)
    }catch(err){
        res.statusCode(404).json({message:"no hotel found"})
    }
}
module.exports=singlehotelHandler
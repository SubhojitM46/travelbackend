const express =require('express')
const router=express.Router();
const singlehotelHandler=require("../controllers/singleHotelController")
//localhost:3500/api/hotels/634983948r973ghsdg(get this as parameter)
router.route("/:id")
    .get(singlehotelHandler)
    module.exports=router;
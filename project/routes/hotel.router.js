const express=require('express')
const router= express.Router();
const getAllhotelHandler=require('../controllers/hotelController')
router.route("/")
    .get(getAllhotelHandler)
module.exports=router;
const express=require('express')
const router=express.Router()

const wishlistController=require("../controllers/wishlistController")
const {createWishlistHandler,deleteWishlistHandler,getWishlistHandler}=wishlistController
const verifyUser=require("../middleware/verifyuser")


router.route("/")
    .post(verifyUser,createWishlistHandler)
router.route("/:id")
    .delete(verifyUser,deleteWishlistHandler)
router.route("/")
    .get(verifyUser,getWishlistHandler)
    module.exports=router;
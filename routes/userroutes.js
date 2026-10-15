const express=require("express")
const router=express.Router()

const usercontroller=require("../controllers/usercontroller")
const {validateuser}=require("../middleware/usermiddleware")
router.get("/profile", usercontroller.getprofile)
router.get("/register", usercontroller.register)


module.exports=router
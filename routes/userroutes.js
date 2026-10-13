const express=require("express")
const router=express.Router()

const usercontroller=require("../controllers/usercontroller")

router.get("/profile", usercontroller.getprofile)


module.exports=router
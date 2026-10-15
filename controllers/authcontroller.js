const user = require("../models/user")
const User=require("../models/user")
const signup=async(req,res)=>{
try {
    const {username,password}=req.body
    if(!username || !password){
        return res.status(400).json({message:"username and password required"})
    }
    const existinguser=await User.findOne({username})
    if(existinguser){
        return res.status(400).json({message:"user already exist"})

    }
    await user.create({
        username,
        password
    })
    res.status(201).json({message:"user created successfully"})
} catch (error) {
    console.error(error)
    res.status(500).json({message:"server error"})
}
}
const login=async(req,res)=>{
    try {
        const{username,password}=req.body
        if(!username || !password){
        return res.status(400).json({message:"username and password required"})
    }
        const User=await user.findOne({username})
        if(!User){
            return res.status(401).json({message:"invalid username or password"})
        }
        if(User.password!==password){
            return res.status(401).json({message:"invalid username or password"})
        }
        res.status(200).json({message:"login successfully"})

    } catch (error) {
          console.error(error)
          res.status(500).json({message:"server error"})
    }
}

module.exports={
    signup,login
}
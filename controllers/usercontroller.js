const getprofile=(req,res)=>{
    res.send("profile page accessed")
}

const register=(req,res)=>{
    res.status(200).json({message:"user registerd"})
}
module.exports={
    getprofile,
    register
}
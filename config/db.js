const mongoose=require("mongoose")

const connectDb=async()=>{
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/janbatchoct")
        console.log("mongodb connected")
    } catch (error) {
        console.error(error)
        process.exit()
    }
}
module.exports=connectDb
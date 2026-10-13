const express=require("express")
const connectDb=require("./config/db")
const userroutes=require("./routes/userroutes")
const PORT=3000
const app=express()
connectDb()


app.use("/user",userroutes)






app.listen(3000,()=>console.log("server running..."))
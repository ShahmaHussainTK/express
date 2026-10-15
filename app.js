const express=require("express")
const connectDb=require("./config/db")
const userroutes=require("./routes/userroutes")
const authroutes=require("./routes/authroutes")
const PORT=3000
const app=express()
connectDb()

app.use(express.json())
app.use("/user",userroutes)
app.use("/auth",authroutes)






app.listen(3000,()=>console.log("server running..."))
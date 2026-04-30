import express from "express"
const app = express()
import dotenv from "dotenv"

dotenv.config()

app.get("/",(req,res)=>{
    return res.json({
        message:"Hello From Docker container.This is used how to make a image from a nodeapp"
    })
})

const PORT = process.env.PORT || 8000
app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT} Port`)
})
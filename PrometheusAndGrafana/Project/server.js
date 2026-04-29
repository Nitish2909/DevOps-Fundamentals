import express from "express"
const app = express()
import dotenv from "dotenv"
import client from "prom-client"  // For Metrics Collection
import { doSomeHeavyTask } from "./util.js"

dotenv.config()

const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics({ register: client.register })

app.get("/", (req, res) => {
    return res.json({
        message: "Hello From Express Server"
    })
})

app.get("/slow", async (req, res) => {
    try {

        const timeTaken = await doSomeHeavyTask();
        return res.json({
            status: "Success",
            message: `Heavy Task is Completed in ${timeTaken}ms`
        })

    } catch (error) {

        res.status(500).json({
            status: "Error",
            message: "Internal Server Error"
        })

    }
})

app.get("/metrics", async (req,res)=>{
    res.setHeader('Content-Type', client.register.contentType)
    const metrics = await client.register.metrics();
    res.send(metrics)
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
    console.log(`Server is Running on ${PORT} Port`)
})
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const port = 1234
const app = express()
mongoose.connect("mongodb+srv://politics:today@cluster0.xd5wm.mongodb.net/election?").then(()=>{
    app.listen(port, ()=>{
        console.log("Everything is cool", port)
    })
}).catch((error)=>{
    console.log(error)
})
app.use(express.json())
app.use(cors())
app.get("/", (req, res)=>{
    res.status(200).json({
        message:"politics API / entry point"
    })
})
app.use("/api", require("./controller/controller"))


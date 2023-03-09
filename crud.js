const express = require("express")
const mongoose = require("mongoose")
const app = express();
const dbConnect = mongoose.connect("mongodb://localhost:27017")


app.get("/getLisa", async(req,res)=>{
    const lisa = await Lisa.find();
    res.status(200).json(lisa);
})

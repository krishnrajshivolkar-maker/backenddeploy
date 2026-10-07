const express = require("express")

const app = express()

app.get("/test",(req,res)=>{
    res.send("Hit")
})

module.exports = app;

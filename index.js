const express = require('express');

const app = express();

const port =9000;


app.use("/",(req,res)=>{
    res.json({message:"Hello from express app"})
})


app.listen(port, ()=>{
    console.log(`Running server on port ${port}`)
})
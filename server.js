const express= require('express');

const app = express()

app.get("/",(req,res)=>{
    res.send("the root app")
})

app.listen("1300",()=>{
    console.log("server is listing");
    
})
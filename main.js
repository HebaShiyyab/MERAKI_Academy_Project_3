const express = require('express');
const app= express();
const port = 5000;
app.get("/articles",(req,res)=>{
    res.status=200;
    console.log(res.body)
})
app.listen(port,()=>{
    console.log(`the server at http://localhost:${port}`);
})
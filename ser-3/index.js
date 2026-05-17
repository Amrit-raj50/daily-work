const express = require('express');

const app = express();

app.get("/api/message" , (req,res) =>{
    res.json({message : "Hello world!!"});
})

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
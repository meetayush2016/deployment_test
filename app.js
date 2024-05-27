import dotenv from 'dotenv';
dotenv.config();

import express from "express"; 

const app = express(); 
const port = process.env.PORT || 9000; 

app.get("/" , (req, res)=>{
    res.send("<h1 style={clor:red;} >Ayush sharms testing phase 1 launch</h1>"); 
}); 


app.listen(port , ()=>{
    console.log(`Your server is running at : http://localhost:${port}`);
}); 
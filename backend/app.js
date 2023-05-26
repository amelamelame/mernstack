const express = require('express');//to build backend quickly
const app = express();//insance of express
const cors=require('cors');//for cross origin policy
const PORT=8745
app.use(cors());//means use this corspackage when server starts up 

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'));

require('./dB')

app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`);
})
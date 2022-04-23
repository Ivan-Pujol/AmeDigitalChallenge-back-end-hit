const express = require('express');
const server = express();
require('dotenv').config();
const port = process.env.PORT;

server.use(express.json());

server.get('/teste', (req, res) =>{
    return res.json({message: 'You are now in the API root'});
})

server.listen(port, ()=>{
    console.log(`Wellcome your server is up!, Listening on port: ${port}`);
})
const express = require('express');
const cors = require('cors');
const server = express();
server.use(express.json());
server.use(cors());
require('dotenv').config();
const port = process.env.PORT;


server.get('/', (req, res) =>{
    res.send({message: 'You are now in the API root from AmeChallengeBackEnd'});
})

server.listen(port, ()=>{
    console.log(`Wellcome your server is up!, Listening on port: ${port}`);
})
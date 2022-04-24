const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
const server = express();
server.use(express.json());
server.use(cors());
require('dotenv').config();
const port = process.env.PORT;
//const Client = require('pg').Client;
const {sequelize} = require('./Models')



server.get('/', (req, res) =>{
    res.send({message: 'You are now in the API root from AmeChallengeBackEnd'});
})

server.listen(port, ()=>{
    console.log(`Wellcome your server is up!, Listening on port: ${port}`);
    
    // try{
    //     cliente.connect();
    // }catch (err){
    //     return res.send(`It wasn't  possible to connect to the Databse. ${err}`)
    // }
    
})
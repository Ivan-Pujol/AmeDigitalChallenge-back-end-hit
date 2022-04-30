const express = require('express');
const cors = require('cors');
const server = express();
const routes = require('./Routes/routes');
const config = require('./Config')
const Client = require('pg').Client;
server.use(express.json());
server.use(cors());
server.use('/planets/', routes);
require('dotenv').config();
const port = process.env.PORT;  
const dbClient = new Client(config);



server.get('/planets', (req, res) =>{
    res.send({message: 'You are now in the API root from AmeChallengeBackEnd'});
})
async function initConnection(){
    await dbClient.connect();
    console.log("Conectou?")
}
server.listen(port, ()=>{
    console.log(`Wellcome your server is up!, Listening on port: ${port}`);
    
});


const routes = require('../Routes/routes.js');
const dbConfig = require('../Config/index');
const { Pool } = require('pg');
const pool = new Pool(dbConfig);
const axios  = require('axios');


// async function testingConnection(){
//     await pool.connect();
//     const sql = 'INSERT INTO planets(planet_name, planet_weather, planet_terrain) VALUES ($1,$2,$3);';
//     const values = ['Jupiter', 'Cold', 'Gauseous'];
//     await client.query(sql, values);
//     const res = await client.query('SELECT * FROM planets');
//     console.log(res.rows); // Hello world!
//     await client.end();

// }



async function getAllPlanets(req, res) {
  try {
      await pool.connect();
    const planets = await pool.query('SELECT * FROM planets');
    if (planets.length < 1) {
      res.status(404).send({ message: 'No planet was found'});
    //   await pool.end();
      return;
    }
    res.send(planets.rows);
    //  await pool.end();
  } catch (err) {
    res
      .status(500)
      .send(err.message);
    //  await pool.end();
  }
  
};
async function getPlanetById(req, res) {
    try {     
      const {cod}  = req.params;  
      await pool.connect();
      const planets = await pool.query('SELECT * FROM planets WHERE planet_id = '+`${cod}`);
      if (planets.rowCount === 0) {
        res.status(404).send({ message: 'No planet was found'});
        return;        
      }  
      const starWarsResult = await axios.get(`https://swapi.dev/api/planets/${cod}`)
      const finalResult = { planet: planets.rows, films: starWarsResult.data.films}
     res.send(finalResult);
    } catch (err) {
      res
        .status(500)
        .send({error: `Un error ocurred looking for the planet:   ${err.message}`});       
    }    
  };

  async function getPlanetByName(req, res) {
    try {     
      const {name}  = req.params;
      await pool.connect();
      const planets = await pool.query('SELECT * FROM planets WHERE planet_name = '+`'${name}'`);          
      if (planets.rowCount === 0) {
        res.status(404).send({ message: 'No planet was found'});
        return;
      }
      const {planet_id} = planets.rows[0];
      const starWarsResult = await axios.get(`https://swapi.dev/api/planets/${planet_id}`)
      const finalResult = { planet: planets.rows, films: starWarsResult.data.films}
     res.send(finalResult);
    } catch (err) {
      res
        .status(500)
        .send({error: `Un error ocurred looking for the planet:   ${err.message}`});       
    }    
  };

  async function getPlanetByClimate(req, res) {
    try {     
      const {climate}  = req.params;  
      await pool.connect();
      const planets = await pool.query(`SELECT * FROM planets WHERE planet_climate LIKE '%${climate}%'`);          
      if (planets.rowCount === 0) {
        res.status(404).send({ message: 'No planet was found'});
        return;
      }  
      const {planet_id} = planets.rows[0];
      const starWarsResult = await axios.get(`https://swapi.dev/api/planets/${planet_id}`)
      const finalResult = { planet: planets.rows, films: starWarsResult.data.films}
     res.send(finalResult);
    } catch (err) {
      res
        .status(500)
        .send({error: `Un error ocurred looking for the planet:   ${err.message}`});       
    }    
  };
  async function getPlanetByTerrain(req, res) {
    try {     
      const {terrain}  = req.params;  
      await pool.connect();
      const planets = await pool.query(`SELECT * FROM planets WHERE planet_terrain LIKE '%${terrain}%'`);  
      if (planets.rowCount === 0) {
        res.status(404).send({ message: 'No planet was found'});
        return;
      }  
      const {planet_id} = planets.rows[0];
      const starWarsResult = await axios.get(`https://swapi.dev/api/planets/${planet_id}`)
      const finalResult = { planet: planets.rows, films: starWarsResult.data.films}
     res.send(finalResult);
    } catch (err) {
      res
        .status(500)
        .send({error: `Un error ocurred looking for the planet:   ${err.message}`});       
    }    
  };
module.exports = {getAllPlanets, getPlanetById, getPlanetByName, getPlanetByTerrain, getPlanetByClimate};
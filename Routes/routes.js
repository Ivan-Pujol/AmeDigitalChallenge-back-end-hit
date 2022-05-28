const express = require('express');
const planetsRouter = express.Router();
const controller = require('../Controllers/controller');
const app = express();
app.use(express.json());

app.get('/',controller.wellcome);
 app.get('/getall', controller.getAllPlanets);
 app.get('/id/:cod', controller.getPlanetById);
 app.get('/name/:name', controller.getPlanetByName);
 app.get('/terrain/:terrain', controller.getPlanetByTerrain);
 app.get('/climate/:climate', controller.getPlanetByClimate);
 app.post('/include', controller.includePlanet);
 app.delete('/delete/:cod', controller.removeById);

module.exports = app;
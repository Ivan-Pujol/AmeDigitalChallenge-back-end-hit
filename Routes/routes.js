const express = require('express');
const planetsRouter = express.Router();
const controller = require('../Controllers/controller');
const app = express();


 app.get('/getall', controller.getAllPlanets);
 app.get('/id/:cod', controller.getPlanetById);
 app.get('/name/:name', controller.getPlanetByName);
 app.get('/terrain/:terrain', controller.getPlanetByTerrain);
 app.get('/climate/:climate', controller.getPlanetByClimate);

module.exports = app;
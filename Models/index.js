const sequelize = require('../Config/sequelize');
const Sequelize = require('sequelize');
const PlanetModel = require('../Models/planetModel');
const planetmodel = PlanetModel(sequelize, Sequelize.DataTypes);
const db = {planetmodel, sequelize};
module.exports = db;
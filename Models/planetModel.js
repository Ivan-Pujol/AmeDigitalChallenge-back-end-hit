const { DataTypes } = require("sequelize/types");
const sequelize = require("../Config/sequelize");

const planetmodel = (sequelize, DataTypes)=>{
    const PlanetModel = sequelize.define('PlanetModel', {
       planet_name: {type: DataTypes.STRING} ,
       planet_weather: {type: DataTypes.STRING},
       planet_terrain: {type: DataTypes.STRING}
    }, {
        tableName: 'planets'
    });
    return planetmodel;
};
module.exports  = planetmodel;
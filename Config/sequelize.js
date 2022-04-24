const Sequelize = require('sequelize');
const configDatabase = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.HOST,
    port: process.env.DB_PORT,
    database: process.env.DATABASE
};
const sequelize = new Sequelize(configDatabase);
module.exports = sequelize;
const { Sequelize } = require('sequelize');

const db = new Sequelize(process.env.DB_URL || 'postgres://postgres:postgress@localhost:5432/trell');

module.exports = db;

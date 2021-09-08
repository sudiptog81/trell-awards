const Sequelize = require('sequelize');
const db = require('../config/database');
const Event = require('./Event');

const Sport = db.define('sport', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

Sport.hasMany(Event);

module.exports = Sport;


const Sequelize = require('sequelize');
const db = require('../config/database');
const Country = require('./Country');
const Sport = require('./Sport');

const Event =  db.define('event', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  isLive: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.STRING,
    allowNull: false
  },
});

Event.hasMany(Country);

module.exports = Event;

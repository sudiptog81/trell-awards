const Sequelize = require('sequelize');
const db = require('../config/database');
const Event = require('./Event');
const Sport = require('./Sport');

const Country =  db.define('country', {
  id: {
    type: Sequelize.STRING,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  // medalWinners
});

module.exports = Country;

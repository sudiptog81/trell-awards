const { Sequelize, Datatypes } = require('sequelize');
const db = require('../config/database');
const Sport = require('./Sport');

const Medal = Sequelize.define('medal', {
  id: {
    type: Datatypes.STRING,
    primaryKey: true,
  },
  type: {
    type: Datatypes.STRING,
    allowNull: false,
  }
});

Medal.belongsTo(Event);
Medal.belongsTo(Country);

module.exports = Medal;

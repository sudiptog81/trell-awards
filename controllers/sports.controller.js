const db = require('../config/database');
const Country = require('../models/Country');
const Event = require('../models/Event');
const Sport = require('../models/Sport');

const getSports = async () => {
  const sports = await Sport.findAll({include: Event});
  return sports;
}

const getSportById = async (id) => {
  const event = await Sport.findByPk(id, {include: Event});
  return event;
}

module.exports = {getSports, getSportById}

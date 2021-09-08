const db = require('../config/database');
const { Op } = require("sequelize");
const Country = require('../models/Country');
const Event = require('../models/Event');
const { v4 } = require('uuid');

const getEvents = async (filter, by, value) => {
  if (filter){
    return Event.findAll({
      where: {
        [by]: {
          [Op.eq]: value
        }
      },
      include: Country
    });
  }
  return  await Event.findAll({
      include: Country
    })
}

const getEventsByDate = async (date) => {
  const events = await Event.findAll({
    where: {
      date: {
        [Op.eq]: date
      }
    },
    include: Country
  });
  return events;
}

const getEventsByCountry = async (query) => {
  const events = await Event.findOne({
    where: {
      'country.name': {
        [Op.in]: query
      }
    },
    include: Country
  });
  return events;
}

const getEventById = async (id) => {
  const event = await Event.findByPk(id, {include: Country});
  return event;
}

const createEvent = async (data) => {
  const {isLive, name, date, sportId} = data;
 return Event.create({
    id: v4(),
    isLive,
    name,
    date,
    sportId
  });
}

module.exports = {getEvents, getEventById, getEventsByDate, createEvent, getEventsByCountry}

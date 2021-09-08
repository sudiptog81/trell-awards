const express = require('express');
const {getEvents, getEventById, getEventsByDate, createEvent, getEventsByCountry} = require('../controllers/event.controller');
const router = express.Router();

router.get('/', async  (req, res) => {
  const { filter, by, value } = req.query;
  const events = await getEvents(filter, by, value);
  console.log(events);
  res.json(events);
});

router.get('/:id', async  (req, res) => {
  const {id} = req.params;
  if (!id) res.status(401).json({message: 'Bad request'})
  const events = await getEventById(id);
  console.log(events);
  res.json(events);
});

router.get('/date/:date', async  (req, res) => {
  const {date} = req.params;
  if (!date) res.status(401).json({message: 'Bad request'})
  const events = await getEventsByDate(date);
  console.log(events);
  res.json(events);
});

router.get('/country/:country', async  (req, res) => {
  const {country} = req.params;
  if (!country) res.status(401).json({message: 'Bad request'})
  const events = await getEventsByCountry(country);
  console.log(events);
  res.json(events);
});

router.post('/', async (req, res) => {
  const data  =req.body
  const event = await createEvent(data);
  res.json(event);
})
module.exports = router;

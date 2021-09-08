const express = require('express');
const router = express.Router();

const events = require('./events');
const countries = require('./countries');

router.use('/events', events);
router.use('/countries', countries);

module.exports = router;

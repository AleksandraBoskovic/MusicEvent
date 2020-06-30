const controler = require('./eventsController');
const express = require('express')
const router = express.Router();

// GET
router.get('/',controler.getEvents);
router.get('/:eventId',controler.getEventsById);

// POST
router.post('/',controler.createEvent);
router.post('/deleteByInfo',controler.deleteByInfo);

// PATCH
router.patch('/:eventId',controler.updateEventById);

//DELETE
// router.delete('/:eventId',controler.deleteEventById);


module.exports = router;

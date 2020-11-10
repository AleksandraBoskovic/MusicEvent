const controler = require('./eventsController');
const express = require('express')
const router = express.Router();


/******************* MARICA NOVO **************** */
//GET
router.get('/',controler.getEvents);
router.get('/:eventId',controler.getEventsById);
router.get('/reservedtickets/:username',controler.getTickets);
//router.get('/filter/filterEvents',controler.getEventsAfterFilter);


//DELETE
router.delete('/:eventId',controler.deleteEvent); 
router.delete('/reservedtickets/reserved/:id',controler.deleteTicket);

//PUT - kreiranje dog
router.put('/',controler.createEvent);

// PATCH - izmena eventa
router.patch('/:eventId',controler.updateEventById);

//POST - kupovina karata
router.post('/tickedReservation',controler.ticketReservation); 


module.exports = router;

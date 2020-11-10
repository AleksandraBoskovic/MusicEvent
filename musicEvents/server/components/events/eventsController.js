const mongoose = require('mongoose');
const Events = require('./eventsModel');
const User = require('./../usersNew/userModel');
const Ticket = require('./tickedReservationModel')


module.exports.getEvents = async function (req, res, next) {
  try {
    const events = await Events.find({}).exec();
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};

/*
module.exports.getEventsAfterFilter = async function (req, res, next) {
  const event = await Events.find({
    "vrstaMuzike": req.params.vrstaMuzike,
    "vrstaDogadjaja": req.params.vrstaDogadjaja,
    "slobodanUlaz": req.params.slobodanUlaz
  }).exec();

  if (event) {
    res.status(200);
    res.json(event);
  } else {
    res.status(400);
    res.json({ message: "Ne postoji ni jedan dogadjaj!" });

  }

};
*/

module.exports.getEventsById = async function (req, res, next) {
  const eventId = req.params.eventId;

  try {
    const event = await Events.findById(eventId).exec();
    if (event) {
      res.status(200);
      res.json(event);
    } else {
      res.status(404);
      res.json({ message: "Ne postoji dogadjaj!" });
    }
  } catch (err) {
    next(err);
  }
};



module.exports.createEvent = async function (req, res, next) {
  const eventObj = {
    _id: new mongoose.Types.ObjectId(),
    nazivDog: req.body.nazivDog,
    adresa: req.body.adresa,
    datum: req.body.datum,
    vrstaMuzike: req.body.vrstaMuzike,
    slobodanUlaz: req.body.slobodanUlaz,
    cena: req.body.cena,
    vrstaDogadjaja: req.body.vrstaDogadjaja,
    izvodjac: req.body.izvodjac,
    kapacitet: req.body.kapacitet,
    detalji: req.body.detalji,
    slika: req.body.slika
  };

  const newEvent = new Events(eventObj);

  try {
    const savedEvent = await newEvent.save();
    res.status(201).json({ message: "Dogadjaj je kreiran!", events: savedEvent });
  } catch (err) {
    next(err);
  }
};


module.exports.updateEventById = async function (req, res, next) {

  const eventId = req.params.eventId;
  updateOptions = {};
  for (let i = 0; i < req.body.length; i++) {

    let singleUpdate = req.body[i];
    updateOptions[singleUpdate.fieldName] = singleUpdate.newValue;
  }

  try {
    await Events.updateOne({ _id: eventId }, { $set: updateOptions }).exec();
    const updated = await Events.findById(eventId).exec();
    res.status(200).json({ message: "Dogadjaj je azuriran!", events: updated });
  } catch (err) {
    next(err);
  }

};


module.exports.ticketReservation = async function (req, res, next) {
  try {
    const reservationObj = {
    _id: new mongoose.Types.ObjectId(),
     username: req.body.username,
     eventsAndTickets: req.body.events
    };
    const newRes = new Ticket(reservationObj);

    const savedEvent = await newRes.save();
    res.status(201).json({ message: "Rezervacija je kreirana!", savedEvent: savedEvent });

  } catch (err) {
    next(err);
  }
}

module.exports.getTickets = async function (req, res, next) {
   const username = req.params.username;
  try {
    const ticket = await Ticket.find({username:username}).exec();
    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }

}


//dugme koje brise event i event iz rezervacije
module.exports.deleteEvent = async (req, res, next) => {
  
  const eventId = req.params.eventId;
  try {
    await Events.deleteOne({ _id : eventId }).exec();
    await Ticket.deleteMany({ events : eventId}).exec();

    res.status(200).json({ msg: 'Event je obrisan' });
  }
  catch (err) {
    next(err);
  }

};

//dugme koje brise rezervaciju 
module.exports.deleteTicket = async(req,res,next)=>{
  try{
    const ticket = await Ticket.findById(req.params.id).exec();
    if(ticket)
    {
      await Ticket.findByIdAndDelete(req.params.id).exec();
      res.status(200).json({msg: "Rezervacija je obrisana"});
    }else
    {
      res.status(404).send();
    }
  }catch(err)
  {
    next(err);
  }

}


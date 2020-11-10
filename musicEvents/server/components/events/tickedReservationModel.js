const mongoose = require('mongoose');

const ticketReservationSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username:{
        type: String,
        ref: 'User',
        require: true,
    }, 
    eventsAndTickets : [{
        //type: mongoose.Schema.Types.ObjectId,
        type : Map,
        ref: 'Events',
        require : true,
    
    }]
});


module.exports = mongoose.model('reservedtickets',ticketReservationSchema);

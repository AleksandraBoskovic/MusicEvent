const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nazivDog:{
    type: String,
    require: true,
  },
  adresa:{
    type: String,
    require: true,
  },
  datum:{
    type: String,
    require: true,
  },
  vrstaMuzike:{
    type: String,
    require: true,
  },
  slobodanUlaz:{
    type: String,
    require: true,
  },
  cena:{
    type: String,
    require: true,
  },
  vrstaDogadjaja:{
    type: String,
    require: true,
  },
  izvodjac:{
    type: String,
    require: true,
  },
  kapacitet:{
    type: Number,
    require: true,
  },

},
{
  versionKey: false
}
);

module.exports = mongoose.model('Events',eventsSchema);

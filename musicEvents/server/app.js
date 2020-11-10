// Libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ukljucujemo sesiju 
const session = require('express-session');
const cors  = require('cors');

// Routers
const usersRoutes = require('./components/users/usersAPI');
const eventsRouts = require('./components/events/eventsAPI');

const app = express();

// dodajemo session
app.use(session({
  secret : "Secret...",
  resave : false,
  saveUninitialized : true
}));
// dodajemo cors 
app.use(cors({
  origin:['http://localhost:4200'],
  credentials : true
}));

mongoose.connect('mongodb://127.0.0.1:27017/bazaEU', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//x-www-form-urlencoded format
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
//json format
app.use(bodyParser.json({}));

// Implementacija CORS zastite
app.use(function (req, res, next) {
  // ne zelimo da dozvolimo svim originima  da pristupe
  // res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PATCH, DELETE, PUT'
    );

    return res.status(200).json({});
  }

  next();
});

// Routes http://localhost:3000/users
app.use('/users', usersRoutes);
// Routes http://localhost:3000/events
app.use('/events', eventsRouts);


//Milos-> nove rute za user-a
// http://localhost:3000/usersNew
const usersNewRoutes = require('./components/usersNew/usersAPI')
app.use('/usersNew',usersNewRoutes);


// obrada svih zahteva koji se ne poklapaju sa pravilima iznad
app.use(function (req, res, next) {
  const error = new Error('Zahtev nije podrzan od servera');
  error.status = 405;

  next(error);
});

// Obrada gresaka
app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
  res.status(statusCode).json({
    error: {
      message: error.message,
      status: statusCode,
      stack: error.stack
    },
  });
});

// Izvozenje Express.js aplikacije 
module.exports = app;

// Libraries
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Routers
const usersRoutes = require('./components/users/usersAPI');
const eventsRouts = require('./components/events/eventsAPI');

const app = express();

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
  res.header('Access-Control-Allow-Origin', '*');
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

// Routes
app.use('/users', usersRoutes);
app.use('/events', eventsRouts);

// Obrada zahteva koji se ne poklapa sa nekim pravilom od iznad
app.use(function (req, res, next) {
  const error = new Error('Zahtev nije podrzan od servera');
  error.status = 405;

  next(error);
});

// Obrada svih gresaka u nasoj aplikaciji
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

// Izvozenje Express.js aplikacije radi pokretanja servera
module.exports = app;

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const path = require('path');

const config = require('./config.json');

//--- Import ROUTES ---//
const UsersRoutes = require('./routes/UsersRoutes');
const CustomersRoutes = require('./routes/CustomersRoutes');

const app = express();

mongoose.connect(config.ipBDD, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

//--- Use ROUTES ---//
app.use('/api/user', UsersRoutes);
app.use('/api/customer', CustomersRoutes);

module.exports = app;

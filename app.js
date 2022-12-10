const express = require('express');
const db = require('./db.config');

const postRoute = require('./routes/pos');
const signRoute = require('./routes/user')

const app = express();
app.use(express.json());


db.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
  });
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/api/v1/pos', postRoute);
app.use('/api/v1/auth', signRoute);




module.exports = app;
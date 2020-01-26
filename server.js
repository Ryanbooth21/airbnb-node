const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const homes = require('./routes/api/homes');

// Bodyparser Middleware

app.use(bodyParser.json());

// Connect to mongo

mongoose
    .connect('mongodb://localhost/airbnb')
    .then(() => console.log('Mongo Db connected!'))
    .catch(err => console.log(err));

// Use Routes

app.use('/api/homes', homes)

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server started on port ${port}`))
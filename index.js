const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Setting up express app
const app = express();

// connect to mongdb
connectDatabase();

async function connectDatabase(){
    await mongoose.connect(process.env.dbURI)
    .then
    console.log("Connected to database successfully")
};


mongoose.Promise = global.Promise;

app.use(express.json());
// app.use(express.urlencoded({extended: true}));
// route handler
app.use('/api', routes);

// error handling middleware
app.use(function(err, req, res, next){
    console.log(err);
    res.status(422).send({error: err.message});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests on port 4000')
});
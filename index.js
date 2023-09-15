const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Setting up express app
const app = express();

// connect to mongdb
mongoose.connect('mongodb://localhost/spotsToGo');
mongoose.Promise = global.Promise;


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// route handler
app.use('/api', routes);

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests on port 4000')
});
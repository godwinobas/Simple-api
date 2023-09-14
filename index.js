const express = require('express');
const routes = require('./routes/api')
const bodyParser = require('body-parser');

// Setting up express app
const app = express();

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
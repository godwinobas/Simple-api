const express = require('express');
const routes = require('./routes/api')

// Setting up express app
const app = express();

app.use(routes);

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests on port 4000')
});
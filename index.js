const express = require('express');

// Setting up express app
const app = express();

app.get('/', function(){
    console.log('GET Request');
    res.send({});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('listening for requests on port 4000')
});
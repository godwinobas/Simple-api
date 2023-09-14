const express = require('express');
const router = express.Router();

// get a list of chilling spots from the db
router.get('/spots', function(req, res){
    res.send({type: 'GET'});
});

// add new chilling spot
router.post('/spots', function(req, res){
    console.log(JSON.stringify(req.body));
    res.send({
        type: 'POST',
        name: req.body.name,
        location: req.body.location
    });
});

// update existing chilling spot
router.put('/spots/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete chilling spot
router.delete('/spots/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
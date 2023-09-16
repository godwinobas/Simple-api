const express = require('express');
const router = express.Router();
const Spot = require('../models/spot');

// get a list of chilling spots from the db
router.get('/spots', function(req, res, next){
    res.send({type: 'GET'});
});

// add new chilling spot to db
router.post('/spots', function(req, res, next){
    Spot.create(req.body).then(function(spot){
        res.send(spot);
    }).catch(next);
});

// update existing chilling spot
router.put('/spots/:id', function(req, res, next){
    Spot.findByIdAndUpdate({_id: req.params.id}, req.body)
    .then(function(ninja){
        ninja.findOne({_id: req.params.id}).then(function(ninja){
            res.send(ninja);
        });
    })
});

// delete chilling spot
router.delete('/spots/:id', function(req, res, next){
    Spot.findByIdAndDelete({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;
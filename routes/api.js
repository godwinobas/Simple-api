const express = require('express');
const router = express.Router();
const Spot = require('../models/spot');

// get a list of chilling spots from the db
router.get('/spots', async function(req, res, next){
    // let searchParam = req.query.location
    const query = await Spot.find({ location: req.query.location })
    // console.log(query);
    res.send(query);
    // res.send(await Spot.find({ location: req.query.location }));
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
    .then(function(spot){
        Spot.findById({_id: req.params.id}).then(function(spot){
            res.send(spot);
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
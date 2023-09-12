const express = require('express');
const router = express.Router();

// get a list of chilling spots from the db
router.get('spots', function(req, res){
    res.send({type: 'GET'});
});

// add new chilling spot
router.get('spots', function(req, res){
    res.send({type: 'POST'});
});

// update existing chilling spot
router.get('spots/:id', function(req, res){
    res.send({type: 'PUT'});
});

// delete chilling spot
router.get('spots/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;
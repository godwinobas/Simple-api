const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create geolocation Schema
const GeoSchema = new Schema({
    type: {
        type: String,
        default: "Point"
    },
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});

// create spots Schema & model
const SpotSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name field is required']
    },
    location: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    },
    geometry: GeoSchema
});

const Spot = mongoose.model('spot', SpotSchema);

module.exports = Spot;
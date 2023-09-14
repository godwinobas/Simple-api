const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

// create spots Schema & model
const SpotsSchema = new Schema({
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
    }
    // add in geo location
});

const Spots = mongoose.model('spots', SpotsSchema);

module.exports = Spots;
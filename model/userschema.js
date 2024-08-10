const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    'DID-M': {
        type: String,
        required: true
    },
    'Company Name': {
        type: String,
        required: true
    },
    'DID-R': {
        type: String,
        required: true
    },
    'DID-W': {
        type: String,
        required: true
    },
    'DID-D': {
        type: String,
        required: true
    },
    'DID-S': {
        type: String,
        required: true
    },
    'Company Details': {
        type: String,
        required: true
    },

    'Country': {
        type: String,
        required: true
    }

});
const User = mongoose.model('REGISTRATION', userschema);
module.exports = User;
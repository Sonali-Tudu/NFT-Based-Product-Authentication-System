const mongoose = require('mongoose');
const DIDschema = new mongoose.Schema({
    did: {
        type: String,
        required: true

    }
})
const DID = mongoose.model('DID', DIDschema);
module.exports = DID;
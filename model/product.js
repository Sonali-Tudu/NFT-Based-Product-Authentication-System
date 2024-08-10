const mongoose = require('mongoose');
const productschema = new mongoose.Schema({
    'Product ID': {
        type: String,
        required: true
    },
    'Product Name': {
        type: String,
        required: true
    },
    'Description': {
        type: String,
        required: true,
    },
    'Photo':{
        type: String,
        required: true
    }

});
const Product = mongoose.model('Product', productschema);
module.exports = Product;
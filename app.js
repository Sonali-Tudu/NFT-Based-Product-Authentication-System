const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({ path: './config.env' });
require('./db/conn');

//const User = require('./model/userschema');
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // replace with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

//We link the router files to make our route easy
app.use(require('./router/auth'));
const PORT = process.env.PORT;


app.use(cors({
    origin: 'http://localhost:3000', // replace with your frontend origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.listen(PORT, () => {
    console.log(`App listening to ${PORT}`);

})
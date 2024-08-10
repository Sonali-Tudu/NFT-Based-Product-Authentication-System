const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

require('../db/conn');

const User = require("../model/userschema");
const DID = require("../model/did");
const Product = require('../model/product');

//FOR LOGIN DID
router.post('/checkDid', async(req, res) => {
    //console.log(req.body);
    try {
        const { did } = req.body;
        if (!did) {
            return res.status(400).json({ error: "pls fill " })
        }
        const userDid = await DID.findOne({ did: did });
        console.log(userDid);
        if (!userDid) {
            res.status(400).json({ error: "incorrect DID" });
        } else {
            res.status(200).json({ message: "correct DID" });

        }

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Server error, please try again later" });
    }
});
//FOR THE FORM
router.post('/create', async(req, res) => {
    const {
        'DID-M': didM,
        'Company Name': companyName,
        'DID-R': didR,
        'DID-W': didW,
        'DID-D': didD,
        'DID-S': didS,
        'Company Details': companyDetails,
        'Country': country
    } = req.body;

    if (!didM || !companyName || !didR || !didW || !didD || !didS || !companyDetails || !country) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }
    try {
        // Uncomment and adjust this part if you need to check for user existence
        // const userExist = await User.findOne({ 'DID-M': didM });
        // if (userExist) {
        //     return res.status(422).json({ error: "User with this DID-M already exists" });
        // }

        const user = new User({
            'DID-M': didM,
            'Company Name': companyName,
            'DID-R': didR,
            'DID-W': didW,
            'DID-D': didD,
            'DID-S': didS,
            'Company Details': companyDetails,
            'Country': country
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error, please try again later" });
    }
});

//FOR THE PRODUCT
router.post('/create2', async(req, res) => {
    const {
        'Product ID': pid,
        'Product Name': productName,
        'Description': desc
    } = req.body;

    if (!pid || !productName || !desc) {
        return res.status(422).json({ error: "Please fill in all the fields" });
    }

    try {
        const product = new Product({
        'Product ID': pid,
        'Product Name': productName,
        'Description': desc
        });

        await product.save();
        res.status(201).json({ message: "Product registered successfully" });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error, please try again later" });
    }
});

module.exports = router;
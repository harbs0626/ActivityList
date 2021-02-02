let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// let DB = require('../config/db');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.processRegister = (req, res, next) => {
    let newUser = new userModel.User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        contactNumber: req.body.contactNumber,
        province: req.body.province,
        country: req.body.country,
        postalCode: req.body.postalCode,
        username: req.body.username,
        emailAddress: req.body.emailAddress
    });

    User.register(newUser, req.body.password, (err) => {
        if (err) {
            console.log("[Error Summary] - Unable to register new user:");
            if (err.name == "UserExistsError") {
                console.log("- User already exists!");
                return res.json({ success: false, msg: 'User already exists!'});
            } else {
                console.log(`- ${err}`);
                return res.json({ success: false, msg: `${err}`});
            }
        } else {
            return res.json({ success: true, msg: 'User registered successfully!'});
        }
    })
}

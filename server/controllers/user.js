let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// let DB = require('../config/db');

let userModel = require('../models/user');
let User = userModel.User;

module.exports.processRegister = (req, res, next) => {
    let newUser = new userModel.User({
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
                console.log(`- ${err.name}`);
                return res.json({ success: false, msg: `${err.name}`});
            }
        } else {
            return res.json({ success: true, msg: 'User registered successfully!'});
        }
    })
}

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// let DB = require('../config/db');

let activityModel = require('../models/activity');
let Activity = activityModel.Activity;

module.exports.processAddEntry = (req, res, next) => {
    let newActivity = new Activity({
        title: req.body.title,
        description: req.body.description,
        dateToday: req.body.dateToday,
        createdBy: req.body.username
    });

    Activity.create(newActivity, (err, Activity) => {
        if (err) {
            console.log("[Error Summary] - Unable to add new entry:");
            console.log(`- ${err}`);
            return res.json({ success: false, msg: `${err}` });
        } else {
            return res.json({ success: true, msg: 'Successfully added new entry.' });
        }
    })
}

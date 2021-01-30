let mongoose = require('mongoose');

let Activity = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:  {
        type: String,
        required: true
    }, 
    dateToday: {
        type: String,
        required: true
    },
    createdBy: {
        type: String, 
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    dateModified: {
        type: Date,
        default: Date.now
    }
});

module.exports.Activity = mongoose.model('Activity', Activity);

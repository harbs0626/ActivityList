let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    }, 
    emailAddress: {
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

let options = ({ missingPasswordError: 'Wrong/Missing Password' });

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);

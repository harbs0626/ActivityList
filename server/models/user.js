let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema({
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

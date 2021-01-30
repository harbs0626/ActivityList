let mongoose = require('mongoose');
let database = require('../config/db');

const ConnectToDB = () => {
    mongoose.connect(
        database.URI, 
        { useNewUrlParser: true, 
            useUnifiedTopology: true }
    )

    let mongoDB = mongoose.connection;
    mongoDB.on('error', console.error.bind(console, 'Connection Error:'));

    mongoDB.once('open', () => {
        console.log('Connected to MongoDB...')
    });
}

module.exports = { ConnectToDB };

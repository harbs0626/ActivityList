// ** Server setup

// ** Initialize mongo connection
const { ConnectToDB } = require('../config/conn');
ConnectToDB();

// ** Initialize express/middleware
const { App } = require('../config/app');

module.exports = App();

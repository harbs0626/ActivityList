let express = require('express');
let router = express.Router();

let passport = require('passport');

let activityController = require('../controllers/activity');

// ** Check if authenticated
function checkAuth(req, res, next){
    // if (!req.isAuthenticated()){
    //     return res.redirect('/login');
    // }
    // next();
}

router.post('/addEntry', passport.authenticate('jwt', { session: false }), activityController.processAddEntry);

module.exports = router;

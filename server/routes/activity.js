let express = require('express');
let router = express.Router();

let activityController = require('../controllers/activity');

router.post('/addEntry', activityController.processAddEntry);

module.exports = router;

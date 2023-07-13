var express = require('express');
var router = express.Router();
const eventsCtrl = require('../controllers/events');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET/events
router.get('/', ensureLoggedIn, eventsCtrl.index);

// GET/events/new
router.get('/new', ensureLoggedIn, eventsCtrl.new);


module.exports = router;

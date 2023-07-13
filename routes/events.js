var express = require('express');
var router = express.Router();
const eventsCtrl = require('../controllers/events');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET/events
router.get('/', ensureLoggedIn, eventsCtrl.index);

// GET/events/new
router.get('/new', ensureLoggedIn, eventsCtrl.new);

// POST/events
router.post('/', ensureLoggedIn,eventsCtrl.create);


module.exports = router;

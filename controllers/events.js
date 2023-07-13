const Event = require('../models/event');


module.exports = {
    index,
    new: newEvent
};

function newEvent(req, res) {
    const event = new Event();
    res.render('events/new', {title: 'New Event', errorMsg: '', event});
}

async function index(req, res) {
    const events = await Event.find({});
    res.render('events/index', { title: 'User Events', events });
}
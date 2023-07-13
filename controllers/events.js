const Event = require('../models/event');
const User = require('../models/user');


module.exports = {
    index,
    new: newEvent,
    create
};

async function create(req, res, next){
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        const event = await Event.create(req.body);
        console.log(event);
        res.redirect('/events');
    } catch (err) {
        console.log(err);
        next(err);
    }
}


function newEvent(req, res) {
    const event = new Event();
    res.render('events/new', {title: 'New Event', errorMsg: '', event});
}

async function index(req, res) {
    const events = await Event.find({});
    res.render('events/index', { title: 'User Events', events });
}
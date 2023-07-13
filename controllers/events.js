const Event = require('../models/event');


module.exports = {
    index,
    new: newEvent,
    create
};

async function create(req, res){
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        await Event.create(req.body);
        res.redirect('/events');
    } catch (err) {
        console.log(err);
        res.render('events/new', { title: 'Plan-It', errorMsg: err.message});
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
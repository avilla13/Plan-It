const Event = require('../models/event');
const User = require('../models/user');


module.exports = {
    index,
    new: newEvent,
    create,
    show,
    edit,
    update
};

async function update (req, res, next) {
    try {
        const event = await Event.findById(req.params.id);
        
        // Update only the changed properties
        for (let key in req.body) {
            if(event[key] !== req.body[key]){
                event[key] = req.body[key];
            }
            console.log(event[key]);
            console.log(`req.body[${key}]= ${req.body[key]}`);
        }
        // Save the updated event
        console.log(`updated event: `, req.body);
        await event.save();
        res.redirect(`/events/${event._id}`);
    }
    catch(err) {
        console.log(err);
        next(err);
    }
}

async function edit (req, res) {
    try {
        const event = await Event.findById(req.params.id);
        // console.log(event);
        res.render('events/edit', {title: 'Edit Event', event});
    }
    catch (err) {
        console.log(err);
    }

}

async function show(req, res) {
    try{
        const event = await Event.findById(req.params.id);
        
        res.render('events/show', {title: 'Event Deetz', event });
    }
    catch(err) {
        console.log(err);
        
    }
}

async function create(req, res, next){
    req.body.description = req.body.description.trim();
    for(let key in req.body){
        if(req.body[key] === '') delete req.body[key];
    }
    try {
        const event = await Event.create(req.body);
        console.log(event);
        res.redirect(`/events/${event._id}`); // redirect to '/events/:id'
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
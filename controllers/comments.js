const Event = require('../models/event');

module.exports = {
    create,
    delete: deleteEvent
};

async function deleteEvent(req, res) {
    const event = await Event.findOne({'comments._id': req.params.id, 'comments.user': req.user._id});

    // console.log('event object contains the following: ',event);
    // Remove the comment (mongoose array method)
    event.comments.remove(req.params.id);
    // Save to update the event document
    await event.save();
    // Redirect back to event's show view
    res.redirect(`/events/${event._id}`);

};

async function create(req, res) {
    const event = await Event.findById(req.params.id);
    // user-centric info to req.body (i.e. new comment)
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    // push the comment subdoc into Mongoose array
    event.comments.push(req.body);
    try{
        // save any changes made to event doc
        await event.save();
        // console.log(event);
    }
    catch(err){
        console.log(err);
    }
    res.redirect(`/events/${event._id}`);
};
// models/event.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const eventSchema = new Schema({
    eventName: {
        type: String,
       required: true
    },
    date: {
        type: Date,
        required: true
    },
    place: {
        type: String,
        // required: true,
        default: 'TBD'
    },
    cost: {
        type: Number
    },
    description: {
        type: String
    }
}, {
    timestamps: true
});

// formatted date output
eventSchema.virtual('formattedDate').get(function () {
    const options = {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        timeZoneName: 'short'
    };
    return this.date.toLocaleString('en-US', options);
});

// Compile schema into model
module.exports = mongoose.model('Event', eventSchema);
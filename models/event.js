// models/event.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const commentSchema = new Schema( {
    content: {
        type: String,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    userName: String,
    userAvatar: String
}, {
    timestamps: true
});


const eventSchema = new Schema({
    eventName: {
        type: String,
       required: true
    },
    date: {
        type: Date,
        required: true,
        // default: moment().format('lll')
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
    },
    comments: [commentSchema],
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        default: function () {
            return this.createdBy;
        }
    },
    image: {
        type: String, // Assume the image will be stored as a URL or file path
        default:'https://www.belfercenter.org/themes/belfer/images/event-default-img-med.png'
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
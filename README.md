# Plan-It
### Bring Your Event to Life
Plan-It is an event planning web app designed to simplify the process of organizing and managing events. At its MVP stage, it allows users to create, view, update, and delete events. Users can explore and engage with other users' events by viewing event details and communicating their ideas/feedback by leaving comments. 

The app aims to evolve into a platform where users can not only manage events but also invite others to join and RSVP. It will facilitate collaboration and social interaction by enabling event organizers to invite participants and track their responses. Additionally, Plan-It will help users discover nearby events that align with their interests, such as beach workouts or other activities open to participation. By bringing events to life, the app aims to enhance event planning experiences and foster community engagement.

![index snippet]()

## Getting Started
### Live Link:
Click on the following link to open the heroku deployment for the app:
[Plan-It](https://plan-it-av-0a1ac1929ddc.herokuapp.com/)

### How to Use Plan-It
1. First step is to sign in with your Google Account by clicking on the 'Log In' button or Google Icon in top right of navbar.
2. After loggin-in, you'll be directed to the events home page where you'll notice 'Upcoming Events' heading and a list of the events below it.
3. You can click on the event name that you'd like to check out more info on.
4. At the event's details page, you can read some more info about the event and check out the event's comments to see what other people are saying about that event.
5. If you'd like to leave a comment, feel free to do so. Don't worry you can always delete it afterwards you wish.
6. If this is your event, you can edit or delete it you'd like.
7. If you want to go back to the events home page, click on the 'HOME' link in the navbar.
8. If you'd like to create your own event, click on the 'EVENTS' dropdown link and then select the 'ADD EVENT' link.
9. Fill out the proper fields for your event. One thing to note, the cost refers to the estimated amount for EACH PERSON/ATTENDEE.
10. After you've verified all fields to the best of your knowledge, select the 'Add Event'. Congratulations on creating your first Plan-It event!
11. You can head back to the events home page (HOME) to see that your event has been added to the list.

## Code
```js
async function update (req, res, next) {
    try {
        const event = await Event.findById(req.params.id);

        // Update only the changed properties
        for (let key in req.body) {
            if(event[key] !== req.body[key]){
                event[key] = req.body[key];
            }
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
```

## Technologies
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)![Bootstrap](https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white)![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)![Nodemon](https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD)![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

## Next Steps
- Enable users to invite their friends to their events via email. Even if they don't have an existing account
- Allow for event image uploads where users can upload .jpeg .jpg, and .png images on to their event's details page
- Allow users to create their own user profiles instead of using Google account
- Consume a googlemaps or maps API to verify and display the event's location
- Enable users the ability to like/favorite events or other users' comments
- Enable a 'carousel' feature of the upcoming events to actively engage the audience's attention
- Events whose dates have passed will be taken out of the list and stored in a "Past Events" section
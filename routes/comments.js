const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /events/:id/comments (create comment for an event)
router.post('/events/:id/comments', ensureLoggedIn, commentsCtrl.create);

// DELETE /comments
router.delete('/comments/:id', ensureLoggedIn, commentsCtrl.delete);






module.exports = router;
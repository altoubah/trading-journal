// server/routes/postRoutes.js
const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const auth = require('../middleware/auth');
const router = express.Router();

// Create a post (must be logged in)
router.post('/', auth, createPost);

// Get all posts (public)
router.get('/', getPosts);

// Update a post (owner or admin only)
router.put('/:id', auth, updatePost);

// Delete a post (owner or admin only)
router.delete('/:id', auth, deletePost);

module.exports = router;

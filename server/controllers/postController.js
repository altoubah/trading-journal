// server/controllers/postController.js
const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPost = await Post.create({
      title,
      content,
      UserId: req.user.userId,
    });
    return res.json(newPost);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      order: [['createdAt', 'DESC']],
    });
    return res.json(posts);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    // Check if the user is the post owner or an admin
    if (post.UserId !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    const updated = await post.update(req.body);
    return res.json(updated);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found.' });
    }
    if (post.UserId !== req.user.userId && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Unauthorized.' });
    }

    await post.destroy();
    return res.json({ message: 'Post deleted.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error.' });
  }
};

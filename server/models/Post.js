// server/models/Post.js
const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');

const Post = db.define('Post', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Relationship: A User has many Posts
User.hasMany(Post, { onDelete: 'CASCADE' });
Post.belongsTo(User);

module.exports = Post;
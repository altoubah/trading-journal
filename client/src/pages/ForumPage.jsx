// client/src/pages/ForumPage.jsx
import React, { useEffect, useState } from 'react';
import { getPosts, createPost } from '../services/postService';

export default function ForumPage() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const data = await getPosts();
      setPosts(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newPost = await createPost(title, content);
      setPosts([newPost, ...posts]);
      setTitle('');
      setContent('');
    } catch (err) {
      alert('Error creating post. Make sure you’re logged in.');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-primary">Community Forum</h1>

      {/* Post creation form */}
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">Create a New Post</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="postTitle" className="form-label">
                Title
              </label>
              <input
                id="postTitle"
                className="form-control"
                placeholder="Post Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="postContent" className="form-label">
                Content
              </label>
              <textarea
                id="postContent"
                className="form-control"
                placeholder="Content"
                rows="4"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create Post
            </button>
          </form>
        </div>
      </div>

      {/* Display posts in a grid */}
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">
                  {post.content.length > 100
                    ? post.content.slice(0, 100) + '...'
                    : post.content}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

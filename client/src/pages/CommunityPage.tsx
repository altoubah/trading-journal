import React, { type FC, useState } from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  likes: number;
  comments: number;
  timestamp: string;
}

const CommunityPage: FC = () => {
  const [showNewPost, setShowNewPost] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">Community Forum</h1>
        <button
          onClick={() => setShowNewPost(true)}
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors"
        >
          New Post
        </button>
      </div>

      {/* Categories */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 bg-zinc-900/50 border border-amber-900/20 rounded-lg text-white hover:bg-zinc-800/50">
          All Posts
        </button>
        <button className="px-4 py-2 bg-zinc-900/50 border border-amber-900/20 rounded-lg text-white hover:bg-zinc-800/50">
          Strategy Discussion
        </button>
        <button className="px-4 py-2 bg-zinc-900/50 border border-amber-900/20 rounded-lg text-white hover:bg-zinc-800/50">
          Market Analysis
        </button>
        <button className="px-4 py-2 bg-zinc-900/50 border border-amber-900/20 rounded-lg text-white hover:bg-zinc-800/50">
          Trade Ideas
        </button>
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {/* Sample Post */}
        <div className="bg-zinc-900/50 border border-amber-900/20 rounded-lg p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-lg font-medium text-white">ES Technical Analysis for Next Week</h3>
              <p className="text-sm text-gray-400">Posted by @tradingqueen • 2 hours ago</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-400 hover:text-amber-400">
                <span>24</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                </svg>
              </button>
              <button className="flex items-center space-x-1 text-gray-400 hover:text-amber-400">
                <span>12</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-gray-300">Looking at ES futures for next week, we have some interesting setups...</p>
          <button className="mt-4 text-amber-400 hover:text-amber-300 text-sm">Read More →</button>
        </div>
      </div>

      {/* New Post Modal */}
      {showNewPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-zinc-900 border border-amber-900/20 rounded-lg p-6 w-full max-w-2xl">
            <h2 className="text-xl font-bold text-white mb-4">Create New Post</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Title"
                className="w-full bg-black text-white border border-amber-900/20 rounded-lg px-4 py-2.5"
              />
              <textarea
                rows={6}
                placeholder="Write your post..."
                className="w-full bg-black text-white border border-amber-900/20 rounded-lg px-4 py-2.5"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowNewPost(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-lg transition-colors"
                >
                  Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityPage;
import React from 'react';
import Post from './Post';

const LandingPage = ({ posts }) => {
  return (
    <div className="container">
      {posts.map((post) => (
        <Post key={post.postId} post={post} />
      ))}
    </div>
  );
};

export default LandingPage;

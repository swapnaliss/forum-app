import React from 'react';

const LandingPage = ({ posts }) => {
  return (
    <div className="container">
      {posts.map((post) => (
        <div className="card" key={post.id}>
            <div className="card-body">
                <h5 className="card-title">{post.post}</h5>
                <p className="card-text">{post.postDescription}</p>
            </div>
        </div>
      ))}
    </div>
  );
};

export default LandingPage;

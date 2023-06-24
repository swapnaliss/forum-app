import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';

const Sidebar = ({ posts, onSortByDate, onSortByUpvotes }) => {
  const [sortBy, setSortBy] = useState('');

  const handleSortByDate = () => {
    setSortBy('date');
    onSortByDate();
  };

  const handleSortByUpvotes = () => {
    setSortBy('upvotes');
    onSortByUpvotes();
  };

  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link disabled>Home</Nav.Link>
        <Nav.Link disabled>Explore</Nav.Link>
        <Nav.Link disabled>Bookmarks</Nav.Link>
        <Nav.Link disabled>Profile</Nav.Link>
        <div className="mt-3">
          <Button variant={sortBy === 'date' ? 'primary' : 'outline-primary'} onClick={handleSortByDate}>
            Sort by Date
          </Button>
          <Button variant={sortBy === 'upvotes' ? 'primary' : 'outline-primary'} onClick={handleSortByUpvotes}>
            Sort by Upvotes
          </Button>
        </div>
      </Nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Nav } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link disabled>Home</Nav.Link>
        <Nav.Link disabled>Explore</Nav.Link>
        <Nav.Link disabled>Bookmarks</Nav.Link>
        <Nav.Link disabled>Profile</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

import React from 'react';
import { Nav } from 'react-bootstrap';
import { AiOutlineHome, AiOutlineSearch, AiOutlineBook, AiOutlineUser } from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link disabled>
          <AiOutlineHome className="nav-icon" color='blue' />
          <span style={{ "color": "blue" }}>
            Home
          </span>
        </Nav.Link>
        <Nav.Link disabled>
          <AiOutlineSearch className="nav-icon" />
          Explore
        </Nav.Link>
        <Nav.Link disabled>
          <AiOutlineBook className="nav-icon" />
          Bookmarks
        </Nav.Link>
        <Nav.Link disabled>
          <AiOutlineUser className="nav-icon" />
          Profile
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;

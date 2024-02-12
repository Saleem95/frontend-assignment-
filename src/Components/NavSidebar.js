import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavSidebar = () => {
  return (
    <>
      <Nav className="flex-column sidebar">
        <Nav.Link><div className='bg-light'>
          <img src="https://thecatapi.com/_app/immutable/assets/thecatapi-logo.78868573.svg" alt="" />
        </div></Nav.Link>
        <Nav.Link as={Link} to="/">Home</Nav.Link>
      </Nav></>
  );
};

export default NavSidebar;

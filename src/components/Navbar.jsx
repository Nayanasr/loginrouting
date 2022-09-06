import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">

      <Nav.Item as="li">
        <Nav.Link>
            <Link to = "/">Home</Link>
        </Nav.Link>
      </Nav.Item>
      
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1">
            <Link to = "/login">login</Link>
        </Nav.Link>
      </Nav.Item>

      <Nav.Item as="li">
        <Nav.Link eventKey="link-2">
            <Link to = "/signup">signup</Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default Navbar;
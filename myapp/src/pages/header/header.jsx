import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = ({currentuser}) => {
  // console.log('hello',props.currentuser);
  return (
    <Navbar bg="dark" expand="lg" fixed="top">
      <Navbar.Brand as={Link} to="/">
        VS_SHOP
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/shop" styles={{ color: "white" }}>
            Home
          </Nav.Link>

        </Nav>
          {
          currentuser ?
          <NavDropdown title="Dropdown" id="basic-nav-dropdown" inline="true">
            <NavDropdown.Item>
            {currentuser.FirstName} {currentuser.LastName}
              </NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/Login">LogOUt</NavDropdown.Item>
              {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
          <NavDropdown.Divider />
          {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
        </NavDropdown>
              : null
          }
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

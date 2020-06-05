import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../Assets/logo.svg";
import classes from "./Toolbar.module.css";
class Toolbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/" bsPrefix={classes.logo}>
            <img
              alt="abbas"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Forest Change Detection
          </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/aboutUs">About Us</Nav.Link>
            <NavDropdown title="Demo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/changeDetection">
                Change Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="/classification">
                Classification
              </NavDropdown.Item>
              {/*<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>*/}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Toolbar;

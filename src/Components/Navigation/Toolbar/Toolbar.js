import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../Assets/logo.svg";
import classes from "./Toolbar.module.css";
import BackgroundImage from "../../../Assets/Capture.PNG";
class Toolbar extends Component {
  render() {
    return (
      <Navbar
        sticky="top"
        collapseOnSelect
        style={{
          color: "white",
          backgroundImage: `url(${BackgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          a: {
            color: "black",
          },
        }}
        expand="sm"
      >
        <Navbar>
          <Navbar.Brand href="/" bsPrefix={classes.logo}>
            <img
              alt="abbas"
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Forest Change Detection Using Remote Sensing Data
          </Navbar.Brand>
        </Navbar>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ paddingLeft: "30%" }}
        >
          <Nav>
            <Nav.Link href="/home" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <Nav.Link href="/aboutUs" style={{ color: "black" }}>
              About Us
            </Nav.Link>
            <NavDropdown
              className={classes.button}
              title="Demo"
              id="collasible-nav-dropdown"
              style={{ color: "black" }}
            >
              <NavDropdown.Item href="/changeDetection">
                Change Detection
              </NavDropdown.Item>
              <NavDropdown.Item href="/classification">
                Multilabel Classification
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

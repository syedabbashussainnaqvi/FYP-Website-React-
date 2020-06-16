import styles from "./HomeUIStyle";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
const Home = (props) => {
  const classes = styles();
  return (
    <Row>
      <Col className={classes.divStyle}>
        <div className={classes.divCenter}>
          <h5>Forest Change Detection Using Remote Sensing Data</h5>
          <NavDropdown
            className={classes.buttonCenter}
            title="Demo"
            id="collasible-nav-dropdown"
          >
            <NavDropdown.Item
              href="/changeDetection"
              style={{ backgroundColor: "black" }}
            >
              Change Detection
            </NavDropdown.Item>
            <NavDropdown.Item
              href="/classification"
              style={{ backgroundColor: "black" }}
            >
              Multilabel Classification
            </NavDropdown.Item>
          </NavDropdown>
        </div>
      </Col>
    </Row>
  );
};
export default Home;

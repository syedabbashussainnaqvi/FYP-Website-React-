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
        <Container>
          <Row>
            <Col className={classes.divCenter}>
              <h3>Forest Change Detection Using Remote Sensing Data</h3>
            </Col>
          </Row>
          <Row>
            <Col md={2} className={classes.divCenter2}>
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
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};
export default Home;

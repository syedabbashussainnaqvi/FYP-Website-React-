import Task from "./Task/Task";
import styles from "./HomeStyle";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
const Home = (props) => {
  const classes = styles();
  const count = useSelector((state) => state.tasks);
  const readHandler = (id) => {
    props.history.push({ pathname: "/taskUI/" + id });
  };
  return (
    <Container fluid>
      <Row>
        <Col className={classes.divStyle}>
          <div className={classes.divCenter}>
            <p>Forest Change Detection</p>
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
                Classification
              </NavDropdown.Item>
            </NavDropdown>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Col md={12}>
          <Task
            imgName="abbas.jpg"
            heading="Welcome To Our Website"
            readHandler={readHandler}
            id="classification"
          >
            Syed Abbas Hussain Naqvi is a Talented Final Year Computer Science
            student with a strong academic background and the ability to think
            through a problem coupled with the confidence to make ideas heard.
            He is working in TUKL-NUST R&D Centre at my University (NUST) He is
            interested in MERN Stack Development and Data Science. His Final
            Year Project is "Patch-Wise Forest Segmentation of Remote Sensing
            Data". He is working on forest classification, change detection and
            data fusion of Sentinel-1 and Sentinel-2 imagery to get better
            classification results on the Pakistan dataset.
          </Task>
        </Col>
        <Col style={{ marginTop: "10px" }}>
          <Task
            id="changeDetection"
            imgName="abbas.jpg"
            heading="Welcome To Our Website"
            readHandler={readHandler}
            flex="row-reverse"
          >
            Syed Abbas Hussain Naqvi is a Talented Final Year Computer Science
            student with a strong academic background and the ability to think
            through a problem coupled with the confidence to make ideas heard.
            He is working in TUKL-NUST R&D Centre at my University (NUST) He is
            interested in MERN Stack Development and Data Science. His Final
            Year Project is "Patch-Wise Forest Segmentation of Remote Sensing
            Data". He is working on forest classification, change detection and
            data fusion of Sentinel-1 and Sentinel-2 imagery to get better
            classification results on the Pakistan dataset.
          </Task>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;

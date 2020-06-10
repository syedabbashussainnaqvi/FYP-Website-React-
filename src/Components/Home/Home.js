import Task from "./Task/Task";
import styles from "./HomeStyle";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import Steps from "./Steps/Steps";
const Home = (props) => {
  const classes = styles();
  const readHandler = (id) => {
    console.log(id);
    props.history.push({ pathname: "/projectdiscription/" + id });
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

      <Row>
        <Steps />
      </Row>
      <hr />
      <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Col>
          <Task
            imgName="abbas.jpg"
            heading="Classification"
            readHandler={readHandler}
            id="classification"
          >
            Optical images acquired from satellites like sentinel-2 are usually
            affected by atmosphere and the clouds. While the radar images
            acquired through satellites like sentinel-1 are not affected because
            radiometric waves can penetrate through atmosphere and the clouds.
            Both SAR images and optical images contain different information
            with respect to scene understanding. Both images can be merged to
            form a complex understanding. We worked on BigEarthNet dataset which
            contain optical images of sentinel-2 for 10 European countries. We
            collected the SAR images of sentinel-1 for the equivalent scenes of
            BigEarthNet dataset. We collected about 248,390 SAR images and the
            same no. of image pairs, each pair with spatial resolution of 10m.
            Later on, we merged the two images channel-wise to train the VGG-16
            architecture for multilabel classification. Combining the 2
            different images improves the classification result by nearly 3%
          </Task>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Task
            id="changeDetection"
            imgName="abbas.jpg"
            heading="Change Detection"
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
      <hr />
    </Container>
  );
};
export default Home;

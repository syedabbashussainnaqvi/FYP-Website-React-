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
            The lack of annotated data of Pakistan leads to use the unsupervised
            technique to detect land cover changes. In order to monitor the
            forest growth or decline, an automated tool is required for this
            purpose, pretrained segmentation model is required which has been
            trained on similar dataset. A UNet model is trained on Potsdam
            dataset containing land scene images along with ground truth of 6
            classes. After training, the model inferred on two temporal images
            of same region. Later, channel wise Euclidean distance was
            calculated between two images which produced the difference image.
            After that K-Means Clustering algorithm was applied on difference
            image which produced the change map.
          </Task>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
export default Home;

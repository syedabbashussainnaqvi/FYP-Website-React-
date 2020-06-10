import styles from "./StepsStyle";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

const Steps = (props) => {
  const classes = styles();
  return (
    <Container fluid>
      <Row>
        <Col md={12} as="h1" style={{ marginTop: "1%", textAlign: "center" }}>
          Project WorkFlow
        </Col>
        <Col md={2} className={classes.imageDiv}>
          <Col className={classes.innerDiv}>
            Collecting SAR image for BigEarth Data
          </Col>
        </Col>
        <Col md={2} className={classes.imageDiv}>
          <Col className={classes.innerDiv}>
            Multilable Classification of SAR and Optical Data
          </Col>
        </Col>
        <Col md={2} className={classes.imageDiv}>
          <Col className={classes.innerDiv}>
            Collecting SAR and Optical Data for Pakistan Region
          </Col>
        </Col>
        <Col md={2} className={classes.imageDiv}>
          <Col className={classes.innerDiv}>
            Training UNet on ISPRS Postdam dataset
          </Col>
        </Col>
        <Col md={2} className={classes.imageDiv}>
          <Col className={classes.innerDiv}>
            Inferring on Pakistan Data to create Change Map
          </Col>
        </Col>
      </Row>
    </Container>
  );
};
export default Steps;

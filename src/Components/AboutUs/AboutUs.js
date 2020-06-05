import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import classes from "./AboutUs.module.css";
class AboutUs extends Component {
  render() {
    let a = ["container"];
    a.push(classes.About);
    return (
      <Container bsPrefix={a.join(" ")} fluid="xl">
        <Row>
          <Col>1 of 1</Col>
        </Row>
      </Container>
    );
  }
}
export default AboutUs;

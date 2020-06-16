import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import classes from "./AboutUs.module.css";
import Faisal from "../../Assets/faisal.gif";
import Shahzad from "../../Assets/shahzad.gif";
import Abbas from "../../Assets/abbas.jpg";
import Rizwan from "../../Assets/Rizwan.jpg";
class AboutUs extends Component {
  render() {
    let a = ["col"];
    a.push(classes.Supervisors);
    let c = ["row"];
    c.push(classes.Right);
    return (
      <Container fluid style={{ textAlign: "justify" }}>
        <Row>
          <Col bsPrefix={a.join(" ")}>Supervisors</Col>
        </Row>
        <Row>
          <Col md={2}>
            <img
              src={Faisal}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
              }}
            />
          </Col>
          <Col md={4}>
            <span className={classes.Name}>Faisal Shafait</span>
            <br /> <span className={classes.Rank}>Advisor</span>
            <br />
            Dr. Faisal Shafait is currently working as a Professor at School of
            Electrical Engineering and Computer Science (SEECS), National
            University of Sciences and Technology (NUST), Islamabad, Pakistan.
            Besides, Previously, He was an Adjunct Senior Lecturer at the School
            of Computer Science and Software Engineering at The University of
            Western Australia in Perth, Australia. He was also a Senior
            Researcher at the German Research Center for Artificial Intelligence
            (DFKI) as well as an Adjunct Lecturer at Kaiserslautern University
            of Technology (TUKL), Germany. He received my PhD with the highest
            distinction in computer engineering from TUKL in 2008.
          </Col>
        </Row>
        <hr />
        <Row style={{ flexDirection: "row-reverse" }}>
          <Col md={2}>
            <img
              src={Shahzad}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
              }}
            />
          </Col>
          <Col md={4}>
            <span className={classes.Name}>Muhammad Shahzad</span>
            <br /> <span className={classes.Rank}>Co-Advisor</span>
            <br />
            Dr. Muhammad Shahzad received B.E. degree in electrical engineering
            from the National University of Sciences and Technology, Islamabad,
            Pakistan, M.Sc. degree in autonomous systems (robotics) from the
            Bonn Rhein Sieg University of Applied Sciences, Sankt Augustin,
            Germany, and his PhD degree on radar remote sensing & image anaylsis
            at the department of Signal Processing in Earth Observation (SiPEO),
            Technische Universität München (TUM), Munich, Germany in 2004, 2011
            and 2016 respectively
          </Col>
        </Row>

        <hr />
        <Row>
          <Col bsPrefix={a.join(" ")}>Group Members</Col>
        </Row>
        <Row>
          <Col md={2}>
            <img
              src={Abbas}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
              }}
            />
          </Col>
          <Col md={4}>
            <span className={classes.Name}>Syed Abbas Hussain Naqvi</span>
            <br /> <span className={classes.Rank}>Software Developer</span>
            <br />
            Syed Abbas Hussain Naqvi is a Talented Final Year Computer Science
            student with a strong academic background and the ability to think
            through a problem coupled with the confidence to make ideas heard.
            He is working in TUKL-NUST R&D Centre at my University (NUST) He is
            interested in MERN Stack Development and Data Science. His Final
            Year Project is "Patch-Wise Forest Segmentation of Remote Sensing
            Data". He is working on forest classification, change detection and
            data fusion of Sentinel-1 and Sentinel-2 imagery to get better
            classification results on the Pakistan dataset.
          </Col>
        </Row>
        <hr />
        <Row style={{ flexDirection: "row-reverse" }}>
          <Col md={2}>
            <img
              src={Rizwan}
              style={{
                width: "100%",
                borderRadius: "10px",
                boxShadow:
                  "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
              }}
            />
          </Col>
          <Col md={4}>
            <span className={classes.Name}>Muhammad Rizwan Khalid</span>
            <br /> <span className={classes.Rank}>Software Developer</span>
            <br />
            Muhammad Rizwan Khalid is a Senior Computer Science Student and
            working in TUKL-NUST R&D Centre at my University (NUST). His areas
            of interest include Machine Learning, Artificial Intelligence, Deep
            Learning, Natural Language Processing, and Computer Vision. His
            Bachelor Thesis is "Patch-Wise Segmentation of Forest in Remotely
            Sensed Data". He is working on data fusion of Sentinel-1 and
            Sentinel-2 data in order to get better classification results on
            Pakistan dataset.
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}
export default AboutUs;

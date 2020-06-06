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
      <Container fluid>
        <Row>
          <Col bsPrefix={a.join(" ")}>Supervisors</Col>
        </Row>
        <Row>
          <Col bsPrefix={classes.Faisal}>
            <img src={Faisal} />
          </Col>
          <Col bsPrefix={classes.Faisal}>
            <span className={classes.Name}>Faisal Shafait</span>
            <br /> <span className={classes.Rank}>Advisor</span>
            <br />
            Dr. Faisal Shafait is currently working as a Professor at School of
            <br />
            Electrical Engineering and Computer Science (SEECS), National
            <br />
            University of Sciences and Technology (NUST), Islamabad, Pakistan.
            <br />
            Besides, Previously, He was an Adjunct Senior Lecturer at the School
            <br />
            of Computer Science and Software Engineering at The University of
            <br />
            Western Australia in Perth, Australia. He was also a Senior
            Researcher
            <br />
            at the German Research Center for Artificial Intelligence (DFKI) as
            well
            <br />
            as an Adjunct Lecturer at Kaiserslautern University of Technology
            (TUKL),
            <br />
            Germany. He received my PhD with the highest distinction in computer
            <br />
            engineering from TUKL in 2008.
            <br />
          </Col>
        </Row>
        <hr />
        <Row bsPrefix={c.join(" ")}>
          <Col bsPrefix={classes.Faisal}>
            <img src={Shahzad} />
          </Col>
          <Col bsPrefix={classes.Faisal}>
            <span className={classes.Name}>Muhammad Shahzad</span>
            <br /> <span className={classes.Rank}>Co-Advisor</span>
            <br />
            Dr. Muhammad Shahzad received B.E. degree in electrical engineering
            <br />
            from the National University of Sciences and Technology, Islamabad,
            <br />
            Pakistan, M.Sc. degree in autonomous systems (robotics) from the
            <br />
            Bonn Rhein Sieg University of Applied Sciences, Sankt Augustin,
            <br />
            Germany, and his PhD degree on radar remote sensing & image anaylsis
            <br />
            at the department of Signal Processing in Earth Observation (SiPEO),
            <br />
            Technische Universität München (TUM), Munich, Germany in 2004, 2011
            <br />
            and 2016 respectively
          </Col>
        </Row>

        <hr />
        <Row>
          <Col bsPrefix={a.join(" ")}>Group Members</Col>
        </Row>
        <Row>
          <Col bsPrefix={classes.Faisal}>
            <img src={Abbas} />
          </Col>
          <Col bsPrefix={classes.Faisal}>
            <span className={classes.Name}>Syed Abbas Hussain Naqvi</span>
            <br /> <span className={classes.Rank}>Software Developer</span>
            <br />
            Syed Abbas Hussain Naqvi is a Talented Final Year Computer Science
            <br />
            student with a strong academic background and the ability to think
            <br />
            through a problem coupled with the confidence to make ideas heard.
            <br />
            He is working in TUKL-NUST R&D Centre at my University (NUST)
            <br />
            He is interested in MERN Stack Development and Data Science.
            <br />
            His Final Year Project is "Patch-Wise Forest Segmentation of Remote
            <br />
            Sensing Data". He is working on forest classification, change
            detection
            <br />
            and data fusion of Sentinel-1 and Sentinel-2 imagery to get better
            classification
            <br />
            results on the Pakistan dataset.
          </Col>
        </Row>
        <hr />
        <Row bsPrefix={c.join(" ")}>
          <Col bsPrefix={classes.Faisal}>
            <img src={Rizwan} />
          </Col>
          <Col bsPrefix={classes.Faisal}>
            <span className={classes.Name}>Muhammad Rizwan Khalid</span>
            <br /> <span className={classes.Rank}>Software Developer</span>
            <br />
            Muhammad Rizwan Khalid is a Senior Computer Science Student and
            <br />
            working in TUKL-NUST R&D Centre at my University (NUST). His areas
            <br />
            of interest include Machine Learning, Artificial Intelligence, Deep
            Learning,
            <br />
            Natural Language Processing, and Computer Vision. His Bachelor
            Thesis
            <br />
            is "Patch-Wise Segmentation of Forest in Remotely Sensed Data". He
            is
            <br />
            working on data fusion of Sentinel-1 and Sentinel-2 data in order to
            get
            <br />
            better classification results on Pakistan dataset.
            <br />
          </Col>
        </Row>
        <hr />
      </Container>
    );
  }
}
export default AboutUs;

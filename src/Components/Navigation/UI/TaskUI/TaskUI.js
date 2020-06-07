import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TaskUIStyles";
import imgd from "../../../../Assets/test.jpg";
import Panel from "../ExpansionPanel/ExpansionPanel";

const TaskUI = (props) => {
  const classes = styles();
  const a = "method";
  return (
    <Container fluid style={{ marginBottom: "20px" }}>
      <Row>
        <Col className={classes.divStyle}>
          <img
            src={imgd}
            style={{ width: "40%", height: "100%", borderRadius: "5px" }}
          />
        </Col>
      </Row>
      <Row>
        <Col md={7} style={{ marginLeft: "20%" }}>
          <Panel />
        </Col>
      </Row>
    </Container>
  );
};
export default TaskUI;

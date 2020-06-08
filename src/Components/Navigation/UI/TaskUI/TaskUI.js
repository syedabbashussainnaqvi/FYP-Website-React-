import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TaskUIStyles";
import imgd from "../../../../Assets/test.jpg";
import Panel from "../ExpansionPanel/ExpansionPanel";
import HomeUI from "../../../Home/HomeUI/HomeUI";
const TaskUI = (props) => {
  const classes = styles();
  const a = "method";
  return (
    <Container fluid style={{ marginBottom: "20px" }}>
      <HomeUI />
      <Row style={{ marginTop: "20px" }}>
        <Col md={7} style={{ marginLeft: "20%" }}>
          <Panel />
        </Col>
      </Row>
    </Container>
  );
};
export default TaskUI;

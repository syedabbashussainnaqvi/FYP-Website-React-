import React from "react";
import styles from "./TaskStyle";
import { Container, Row, Col } from "react-bootstrap";

const Task = (props) => {
  const classes = styles();

  return (
    <Container fluid={"sm"}>
      <Row
        style={{
          flexDirection: props.flex,
        }}
      >
        <Col md={3}>
          <img
            className={classes.img}
            src={require(`../../../Assets/${props.imgName}`)}
            style={{ borderRadius: "10px" }}
          />
        </Col>
        <Col md={7}>
          <span className={classes.heading}>{props.heading}</span>
          <br /> <span className={classes.text}>{props.children}</span>
          <div
            style={{ display: props.readMore }}
            className={classes.read}
            onClick={() => props.readHandler(props.id)}
          >
            read more
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Task;

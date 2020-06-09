import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TaskUIStyles";
import imgd from "../../../../Assets/test.jpg";
import Panel from "../ExpansionPanel/ExpansionPanel";
import HomeUI from "../../../Home/HomeUI/HomeUI";
//redux store sa hmmy data uthana ha
const ProjectDiscription = (props) => {
  const classes = styles();
  const count = useSelector((state) => state.tasks);
  const [state, setState] = React.useState({
    category: null,
  });

  useEffect(() => {
    const selector = props.match.params.id;
    setState({
      category: count[selector],
    });
  }, []);

  let stateSet = <h1>Loading...</h1>;
  if (state.category) {
    stateSet = (
      <Container fluid style={{ marginBottom: "20px" }}>
        <HomeUI />
        <Row style={{ margin: "3% 3% 0 3%" }}>
          <Col
            md={5}
            style={{
              marginBottom: "20px",
              marginRight: "10px",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            }}
          >
            <h5 style={{ textAlign: "center" }}>Abstract</h5>
            <p>{state.category["abstract"]}</p>
          </Col>
          <Col
            md={6}
            style={{
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow:
                "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
            }}
          >
            <img
              src={require(`../../../../Assets/${state.category["methodologyImage"]}`)}
              style={{
                marginTop: "20%",
                borderRadius: "10px",
                width: "100%",
                height: "50%",
              }}
            />
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "20px" }}>
          <Col>
            <Panel />
          </Col>
        </Row>
      </Container>
    );
  }

  return stateSet;
};
export default ProjectDiscription;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./TaskUIStyles";

import Panel from "../ExpansionPanel/ExpansionPanel";
import Panel2 from "../ExpansionPanel2/ExpansionPanel2";
import HomeUI from "../../../Home/HomeUI/HomeUI";
//redux store sa hmmy data uthana ha
const ProjectDiscription = (props) => {
  const classes = styles();
  const classification = useSelector(
    (state) => state.classificationReducer.tasks
  );
  const change = useSelector((state) => state.changeReducer.tasks);
  const [state, setState] = React.useState({
    category: null,
  });

  useEffect(() => {
    const selector = props.match.params.id;
    if (selector == "classification") {
      setState({
        category: classification[selector],
      });
    } else if (selector == "changeDetection") {
      setState({
        category: change[selector],
      });
    }
  }, []);

  let stateSet = <h1>Loading...</h1>;
  if (state.category) {
    stateSet = (
      <Container fluid style={{ marginBottom: "20px", textAlign: "justify" }}>
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
            {props.match.params.id == "classification" ? (
              <img
                src={require(`../../../../Assets/${state.category["methodology"].methodologyImage}`)}
                style={{
                  marginTop: "15%",
                  borderRadius: "10px",
                  width: "100%",
                  height: "50%",
                }}
              />
            ) : (
              <img
                src={require(`../../../../Assets/changeDetection/${state.category["methodology"].methodologyImage}`)}
                style={{
                  marginTop: "15%",
                  borderRadius: "10px",
                  width: "100%",
                  height: "50%",
                }}
              />
            )}
          </Col>
        </Row>
        <hr />
        <Row style={{ marginTop: "20px" }}>
          <Col>
            {props.match.params.id == "classification" ? (
              <Panel category={state.category} />
            ) : (
              <Panel2 category={state.category} />
            )}
          </Col>
        </Row>
      </Container>
    );
  }

  return stateSet;
};
export default ProjectDiscription;

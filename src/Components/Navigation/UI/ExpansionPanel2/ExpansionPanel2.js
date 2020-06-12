import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ExpansionPanel2Styles";
export default function SimpleExpansionPanel(props) {
  const classes = styles();
  const readHandler = () => {
    console.log("Cliecked");
  };
  return (
    <Container fluid>
      <Row>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Dataset</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["dataset"].text}</Col>
                </Row>
                <Row>
                  <Col>
                    <ul>
                      {props.category["dataset"].list.map((obj, i) => {
                        return (
                          <Row>
                            <Col>
                              <li>
                                <span style={{ fontWeight: "bold" }}>
                                  {obj["heading"]}
                                </span>
                                &nbsp;
                                {obj["text"]}
                              </li>
                            </Col>
                          </Row>
                        );
                      })}
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["dataset"]["image"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              {" "}
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>
                Data Collection
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["dataCollection"].text}</Col>
                </Row>
                <Row>
                  <Col md={7}>
                    <ul>
                      {props.category["dataCollection"].headings.map((str) => {
                        return <li>{str}</li>;
                      })}
                    </ul>
                  </Col>
                  <Col md={5}>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["dataCollection"]["image"]}`)}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>{props.category["dataCollection"].text2}</Col>
                </Row>
                <Row>
                  <Col>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["dataCollection"]["image2"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["dataCollection"]["image3"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Methodology</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["methodology"].text}</Col>
                  <ol>
                    {props.category["methodology"].headings.map((obj, i) => {
                      return (
                        <Row>
                          <Col md={12}>
                            <li>
                              <span style={{ fontWeight: "bold" }}>
                                {obj["heading"]}
                              </span>
                              <br />
                              {obj["text"]}
                              <ul>
                                {obj["subheadings"].map((obj2, i) => {
                                  return (
                                    <Row>
                                      <Col>
                                        <li>
                                          <span style={{ fontWeight: "bold" }}>
                                            {obj2["heading"]}
                                          </span>
                                          <br />
                                          {obj2["text"]}
                                          {obj2["heading"] ==
                                          "Concatenations:" ? (
                                            <ul>
                                              {obj2["subSubHeadings"].map(
                                                (obj3) => {
                                                  return (
                                                    <Row>
                                                      <Col>
                                                        <li>{obj3}</li>
                                                      </Col>
                                                    </Row>
                                                  );
                                                }
                                              )}
                                            </ul>
                                          ) : null}
                                          )}
                                        </li>
                                      </Col>
                                    </Row>
                                  );
                                })}
                              </ul>
                            </li>
                          </Col>
                          <Col>
                            <img
                              src={require(`../../../../Assets/changeDetection/${obj["image"]}`)}
                              style={{
                                width: "100%",
                              }}
                            />
                          </Col>
                        </Row>
                      );
                    })}
                  </ol>
                </Row>
              </Container>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Results</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["results"].text}</Col>
                  <Col>
                    {" "}
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["results"]["image"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                </Row>
              </Container>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
      </Row>
      <Row style={{ marginTop: "20px" }}>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Prediction</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["prediction"].text}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["prediction"]["image1"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["prediction"]["image2"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/changeDetection/${props.category["prediction"]["image3"]}`)}
                      style={{
                        width: "100%",
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col></Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col></Col>
                </Row>
              </Container>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
        <Col md={6}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Application</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails></ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
      </Row>
    </Container>
  );
}

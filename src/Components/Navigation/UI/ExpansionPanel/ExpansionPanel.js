import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ExpansionPanelStyles";
import Task from "../../../Home/Task/Task";
import imgr from "../../../../Assets/abbas.jpg";
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
                  <Col>
                    <img
                      src={require(`../../../../Assets/${props.category["dataset"].datasetImage}`)}
                      style={{
                        width: "40%",
                        float: "left",
                      }}
                    />
                    <div>{props.category["dataset"].text}</div>
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
                New Class Nomenclature
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>
                    <img
                      src={require(`../../../../Assets/${props.category["classNomenclature"].classNomenclatureImage}`)}
                      style={{
                        width: "40%",
                        float: "left",
                      }}
                    />
                    <div>{props.category["classNomenclature"].text}</div>
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
              <Typography className={classes.heading}>
                Data Collection
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Col>{props.category["dataCollection"].text}</Col>
                <ul>
                  {props.category["dataCollection"].headings.map((obj, i) => {
                    return (
                      <Row>
                        <Col>
                          <li>
                            <span style={{ fontWeight: "bold" }}>
                              {obj["heading"]}
                            </span>
                            &nbsp;
                            {obj["text"]}
                            {obj["image"] != "none" ? (
                              <Col>
                                {obj["image"] == "heading1Image.jpg" ? (
                                  <img
                                    src={require(`../../../../Assets/${obj["image"]}`)}
                                    style={{
                                      width: "80%",
                                      height: "60%",
                                    }}
                                  />
                                ) : (
                                  <img
                                    src={require(`../../../../Assets/${obj["image"]}`)}
                                    style={{
                                      width: "100%",
                                    }}
                                  />
                                )}
                              </Col>
                            ) : null}
                          </li>
                        </Col>
                      </Row>
                    );
                  })}
                </ul>
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
              <Typography className={classes.heading}>Methodology</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["methodology"].text}</Col>
                  <br />
                </Row>
                <Row>
                  <Col>
                    <img
                      src={require(`../../../../Assets/${props.category["methodology"].methodologyImage}`)}
                      style={{
                        borderRadius: "10px",
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
              <Typography className={classes.heading}>Results</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Container>
                <Row>
                  <Col>{props.category["results"].text}</Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/${props.category["results"].image1}`)}
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/${props.category["results"].image2}`)}
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                  </Col>
                  <Col md={6}>
                    <img
                      src={require(`../../../../Assets/${props.category["results"].image3}`)}
                      style={{
                        borderRadius: "10px",
                        width: "100%",
                      }}
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>{props.category["results"].text2}</Col>
                </Row>
                <Row style={{ marginTop: "10px" }}>
                  <Col>
                    <img
                      src={require(`../../../../Assets/${props.category["results"].image4}`)}
                      style={{
                        borderRadius: "10px",
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
              <AddIcon /> &nbsp;
              <Typography className={classes.heading}>Prediction</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Col>
                <img
                  src={require(`../../../../Assets/${props.category["prediction"].image1}`)}
                  style={{ borderRadius: "10px" }}
                />
              </Col>{" "}
              <Col>
                <img
                  src={require(`../../../../Assets/${props.category["prediction"].image2}`)}
                  style={{ borderRadius: "10px" }}
                />
              </Col>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
      </Row>
    </Container>
  );
}

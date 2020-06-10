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
              <Task
                imgName={props.category["dataset"].datasetImage}
                heading="Dataset"
                readHandler={readHandler}
                id="classification"
                readMore="none"
              >
                {props.category["dataset"].text}
              </Task>
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
              <Task
                imgName={
                  props.category["classNomenclature"].classNomenclatureImage
                }
                heading="  New Class Nomenclature"
                readHandler={readHandler}
                id="classification"
                readMore="none"
              >
                {props.category["dataset"].text}
              </Task>
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
              <Typography>{props.category["dataCollection"].text}</Typography>
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
              <Col>{props.category["methodology"].text}</Col>
              <Col>
                <img
                  src={require(`../../../../Assets/${props.category["methodology"].methodologyImage}`)}
                  style={{ borderRadius: "10px", width: "100%", height: "50%" }}
                />
              </Col>
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
              <Typography>{props.category["results"].text}</Typography>
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

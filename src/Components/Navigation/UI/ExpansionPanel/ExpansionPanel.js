import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import AddIcon from "@material-ui/icons/Add";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ExpansionPanelStyles";

import imgr from "../../../../Assets/abbas.jpg";
export default function SimpleExpansionPanel() {
  const classes = styles();

  return (
    <Container>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography className={classes.heading}>Methodology</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
                Dataset Collection
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
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
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </Col>
      </Row>
    </Container>
  );
}

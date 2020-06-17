import Task from "./Task/Task";
import styles from "./HomeStyle";
import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import Steps from "./Steps/Steps";
const Home = (props) => {
  const classes = styles();
  const classification = useSelector(
    (state) => state.classificationReducer.tasks
  );
  const change = useSelector((state) => state.changeReducer.tasks);
  console.log(classification);
  const readHandler = (id) => {
    props.history.push({ pathname: "/projectdiscription/" + id });
  };
  return (
    <Container fluid style={{ textAlign: "justify" }}>
      <Row>
        <Col className={classes.divStyle}>
          <Container>
            <Row>
              <Col className={classes.divCenter}>
                <h3>Forest Change Detection Using Remote Sensing Data</h3>
              </Col>
            </Row>
            <Row>
              <Col md={2} className={classes.divCenter2}>
                <NavDropdown
                  className={classes.buttonCenter}
                  title="Demo"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item
                    href="/changeDetection"
                    style={{ backgroundColor: "black" }}
                  >
                    Change Detection
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="/classification"
                    style={{ backgroundColor: "black" }}
                  >
                    Multilabel Classification
                  </NavDropdown.Item>
                </NavDropdown>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>

      <Row>
        <Steps />
      </Row>
      <hr />
      <Row style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Col>
          <Container>
            <Row>
              <Col md={4}>
                <img
                  src={require(`../../Assets/methodologyImage.png`)}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow:
                      "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                  }}
                />
              </Col>
              <Col md={8}>
                <h4>
                  Fusing Sentinel-1 and Sentinel-2 images to improve performance
                  of multilable classification​
                </h4>
                Optical images acquired from satellites like sentinel-2 are
                usually affected by atmosphere and the clouds. While the radar
                images acquired through satellites like sentinel-1 are not
                affected because radiometric waves can penetrate through
                atmosphere and the clouds. Both SAR images and optical images
                contain different information with respect to scene
                understanding. Both images can be merged to form a complex
                understanding. We worked on BigEarthNet dataset which contain
                optical images of sentinel-2 for 10 European countries. We
                collected the SAR images of sentinel-1 for the equivalent scenes
                of BigEarthNet dataset. We collected about 248,390 SAR images
                and the same no. of image pairs, each pair with spatial
                resolution of 10m. Later on, we merged the two images
                channel-wise to train the VGG-16 architecture for multilabel
                classification. Combining the 2 different images improves the
                classification result by nearly 3%.
                <div
                  className={classes.read}
                  onClick={() => readHandler("classification")}
                >
                  read more
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Container>
            <Row>
              <Col md={4}>
                <img
                  src={require(`../../Assets/changeDetection/methodologyImage1.jpg`)}
                  style={{
                    width: "100%",
                    borderRadius: "10px",
                    boxShadow:
                      "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
                  }}
                />
              </Col>
              <Col md={8}>
                <h4>
                  Unsupervised Change Detection of Northern Pakistan Region
                  using optical images from Sentine-2 satellite​
                </h4>
                The lack of annotated data of Pakistan leads to use the
                unsupervised technique to detect land cover changes. In order to
                monitor the forest growth or decline, an automated tool is
                required for this purpose, pretrained segmentation model is
                required which has been trained on similar dataset. A UNet model
                is trained on Potsdam dataset containing land scene images along
                with ground truth of 6 classes. After training, the model
                inferred on two temporal images of same region. Later, channel
                wise Euclidean distance was calculated between two images which
                produced the difference image. After that K-Means Clustering
                algorithm was applied on difference image which produced the
                change map.
                <div
                  className={classes.read}
                  onClick={() => readHandler("changeDetection")}
                >
                  read more
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};
export default Home;

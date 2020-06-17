import React, { Component } from "react";
import classes from "./changeDetection.module.css";
import axios from "axios";
import Upload from "../uploadComponent/upload";
import Button from "../Navigation/UI/Button/Button";
import Task from "../Home/Task/Task";
class ChangeDetection extends Component {
  constructor(props) {
    super(props);
    this.postServerHandle = this.postServerHandle.bind(this);
  }
  state = {
    img: null,
    img2: null,
    avatar: null,
  };

  postServerHandle = () => {
    let form = new FormData();
    form.append("file", this.state.img);
    form.append("file2", this.state.img2);

    axios
      .post("http://127.0.0.1:8000/changeDetection/", form)
      .then((response) => {
        console.log(response.data);
        let a = "data:image/png;base64,";
        let res = a + " " + response.data.result;
        this.setState({
          avatar: res,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  setImage = (imgs) => {
    this.setState({
      img: imgs,
    });
  };
  setImage2 = (imgs) => {
    this.setState({
      img2: imgs,
    });
  };

  render() {
    let btn = false;
    if (this.state.img == null && this.state.img2 == null) {
      btn = true;
    }

    let { avatar } = this.state;
    let $imagePreview = null;
    if (avatar) {
      $imagePreview = <img src={avatar} />;
    }
    // else {
    //   $imagePreview = (
    //     <div className={classes.previewText2}>Differenced Image</div>
    //   );
    // }
    let a = [classes.previewText2];
    if (this.state.avatar) {
      a.push(classes.test);
    }
    return (
      <div className={classes.App}>
        <div className={classes.task}>
          <Task
            imgName="howToUse.jfif"
            heading="How to Use"
            readHandler={this.readHandler}
            id="classification"
            readMore="none"
          >
            <ul>
              <li>
                First click on choose file option and select the 1st satellite
                image to test.
              </li>
              <li>
                After first images is shown then again click on choose file
                option to select 2nd image to test{" "}
              </li>
              <li>
                Make sure that the image selected by you is in rgb format.
              </li>
              <li>Then click the Button.</li>
              <li>Wait untill circle on the button is moving.</li>
            </ul>
          </Task>
        </div>
        <div className={classes.task}>
          <Task
            imgName="results.jpg"
            heading="Results"
            readHandler={this.readHandler}
            id="classification"
            readMore="none"
          >
            <ul>
              <li>Wait After Clicking the Submit Button.</li>
              <li>
                After few seconds resultant image will be returned and displayed
                at the bottom of this box.
              </li>
              <li>Resultant image will show the change in the input images.</li>
              <li>Result will be shown below this box.</li>
            </ul>
          </Task>
        </div>
        <h2 style={{ textAlign: "center" }}>
          Upload Images For Change Detection
        </h2>
        <div className={classes.Card}>
          <div className={classes.dis}>
            <Upload setImage={this.setImage} />
            <Upload setImage={this.setImage2} />
          </div>
        </div>
        <Button
          result={this.state.avatar}
          disable={btn}
          postServerHandle={this.postServerHandle}
        />
        <div className={a.join(" ")}>{$imagePreview}</div>
      </div>
    );
  }
}

export default ChangeDetection;

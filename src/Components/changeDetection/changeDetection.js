import React, { Component } from "react";
import classes from "./changeDetection.module.css";
import axios from "axios";
import Upload from "../uploadComponent/upload";

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
      .post("http://127.0.0.1:8000/upload/", form)
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
        <h1>Upload Images For Change Detection</h1>
        <div className={a.join(" ")}>{$imagePreview}</div>
        <div className={classes.Card}>
          <div className={classes.dis}>
            <Upload setImage={this.setImage} />
            <Upload setImage={this.setImage2} />
          </div>
        </div>
        <button
          disabled={btn}
          className={classes.submitButton}
          type="submit"
          onClick={this.postServerHandle}
        >
          Send Image To Server
        </button>
      </div>
    );
  }
}

export default ChangeDetection;

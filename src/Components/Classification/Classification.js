import React, { Component } from "react";
import classes from "./Classification.module.css";
import axios from "axios";
import Upload from "../uploadComponent/upload";

class Classification extends Component {
  constructor(props) {
    super(props);
    this.postServerHandle = this.postServerHandle.bind(this);
  }
  state = {
    img: null,
    avatar: null,
  };

  postServerHandle = () => {
    let form = new FormData();
    form.append("file", this.state.img);

    axios
      .post("http://127.0.0.1:8000/upload/", form)
      .then((response) => {
        console.log(response.data);

        this.setState({
          avatar: response.data.result,
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

  render() {
    let btn = false;
    if (this.state.img == null) {
      btn = true;
    }

    let { avatar } = this.state;
    let returnResult = null;
    if (avatar) {
      returnResult = (
        <div className={classes.previewText2}>
          <h1>Result</h1>
          {this.state.avatar}
        </div>
      );
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
        <h1>Upload Image For Classification</h1>
        <div className={a.join(" ")}>{returnResult}</div>
        <div className={classes.Card}>
          <div className={classes.dis}>
            <Upload setImage={this.setImage} />
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

export default Classification;

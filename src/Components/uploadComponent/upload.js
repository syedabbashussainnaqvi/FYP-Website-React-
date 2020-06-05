import React, { Component } from "react";
import classes from "./upload.module.css";
class ImageUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];
    this.props.setImage(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} />;
    } else {
      $imagePreview = (
        <div className={classes.previewText}>
          Please select an Image for Preview
        </div>
      );
    }

    return (
      <div className={classes.previewComponent}>
        <input
          className={classes.fileInput}
          type="file"
          onChange={(e) => this._handleImageChange(e)}
        />
        <div className={classes.imgPreview}>{$imagePreview}</div>
      </div>
    );
  }
}

// <button
//   className="submitButton"
//   type="submit"
//   onClick={this.postServerHandle}
// >
//   Upload Image
// </button>
export default ImageUpload;

import React, { Component } from "react";
import classes from "./Classification.module.css";
import axios from "axios";
import Upload from "../uploadComponent/upload";
import Input from "../Navigation/UI/input/input";
import Button from "../Navigation/UI/Button/Button";
class Classification extends Component {
  constructor(props) {
    super(props);
    this.postServerHandle = this.postServerHandle.bind(this);
  }
  state = {
    orderForm: {
      Model: {
        inputtype: "select",
        elementConfig: {
          options: [
            { value: "S1", displayValue: "S1" },
            { value: "S2", displayValue: "S2" },
            { value: "S1 + S2", displayValue: "S1 + S2" },
          ],
        },
        value: "S1",
      },
    },
    img: null,
    result: null,
  };

  inputHandler = (event, identifier) => {
    const updateOrder = { ...this.state.orderForm }; //this will not create deep clone it will give access only to direct values not nested values
    const propertyInOrder = { ...updateOrder[identifier] };
    propertyInOrder.value = event.target.value;
    updateOrder[identifier] = propertyInOrder;
    this.setState({
      orderForm: updateOrder,
    });
  };

  postServerHandle = () => {
    let form = new FormData();
    form.append("file", this.state.img);
    form.append("modelCategory", this.state.orderForm.Model.value);

    axios
      .post("http://127.0.0.1:8000/upload/", form)
      .then((response) => {
        console.log(response.data);

        this.setState({
          result: response.data.result,
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
    const inputs = Object.keys(this.state.orderForm).map((entry, index) => {
      return (
        <Input
          key={index}
          label={"Select Model"}
          inputtype={this.state.orderForm[entry].inputtype}
          elementConfig={this.state.orderForm[entry].elementConfig}
          changeHandler={(event) => {
            this.inputHandler(event, entry);
          }}
        />
      );
    });

    let btn = false;
    if (this.state.img == null) {
      btn = true;
    }

    let { result } = this.state;
    let returnResult = null;
    if (result) {
      returnResult = (
        <div className={classes.previewText2}>
          <h2>Result</h2>
          <ul style={{ listStyleType: "none" }}>
            {this.state.result.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      );
    }
    let a = [classes.previewText2];
    if (this.state.result) {
      a.push(classes.test);
    }
    return (
      <div className={classes.App}>
        <h2>Upload Image For Classification</h2>
        <div className={a.join(" ")}>{returnResult}</div>
        <div className={classes.Card}>
          <div className={classes.dis}>
            {inputs}
            <Upload setImage={this.setImage} />
          </div>
        </div>

        <Button
          result={this.state.result}
          disable={btn}
          postServerHandle={this.postServerHandle}
        />
      </div>
    );
  }
}

export default Classification;

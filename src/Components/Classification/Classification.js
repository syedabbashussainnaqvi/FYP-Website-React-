import React, { Component } from "react";
import classes from "./Classification.module.css";
import axios from "axios";
import Upload from "../uploadComponent/upload";
import Input from "../Navigation/UI/input/input";
import Button from "../Navigation/UI/Button/Button";
import Task from "../Home/Task/Task";
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
    setLabel: {
      Coniferousforest: false,
      Mixedforest: false,
      Transitionalwoodlandshrub: false,
      Urbanfabric: false,
      Industrialorcommercialunits: false,
      Arableland: false,
      Permanentcrops: false,
      Pastures: false,
      Complexcultivationpatterns: false,
      Landprincipallyoccupiedbyagriculturewithsignificantareasofnaturalvegetation: false,
      Agroforestryareas: false,
      Broadleavedforest: false,
      Naturalgrasslandandsparselyvegetatedareas: false,
      Moorsheathlandandsclerophyllousvegetation: false,
      Transitionalwoodlandshrub: false,
      Beachesdunessands: false,
      Inlandwetlands: false,
      Coastalwetlands: false,
      Inlandwaters: false,
      Marinewaters: false,
    },
    img: null,
    result: null,
    labels: [
      "Urban fabric",
      "Industrial or commercial units",
      "Arable land",
      "Permanent crops",
      "Pastures",
      "Complex cultivation patterns",
      "Land principally occupied by agriculture, with significant areas of natural vegetation",
      "Agro-forestry areas",
      "Broad-leaved forest",
      "Coniferous forest",
      "Mixed forest",
      "Natural grassland and sparsely vegetated areas",
      "Moors, heathland and sclerophyllous vegetation",
      "Transitional woodland, shrub",
      "Beaches, dunes, sands",
      "Inland wetlands",
      "Coastal wetlands",
      "Inland waters",
      "Marine waters",
    ],
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
          setLabel: {
            Coniferousforest: false,
            Mixedforest: false,
            Transitionalwoodlandshrub: false,
            Urbanfabric: false,
            Industrialorcommercialunits: false,
            Arableland: false,
            Permanentcrops: false,
            Pastures: false,
            Complexcultivationpatterns: false,
            Landprincipallyoccupiedbyagriculturewithsignificantareasofnaturalvegetation: false,
            Agroforestryareas: false,
            Broadleavedforest: false,
            Naturalgrasslandandsparselyvegetatedareas: false,
            Moorsheathlandandsclerophyllousvegetation: false,
            Transitionalwoodlandshrub: false,
            Beachesdunessands: false,
            Inlandwetlands: false,
            Coastalwetlands: false,
            Inlandwaters: false,
            Marinewaters: false,
          },
        });
        response.data.result.map((res) => {
          let spaceRemoval = res.replace(/\s/g, "");
          let dashRemoval = spaceRemoval.replace("-", "");
          let commaRemoval = dashRemoval.replace(/[,]/g, "");
          const updatedLables = { ...this.state.setLabel };
          updatedLables[commaRemoval] = true;

          this.setState({
            setLabel: updatedLables,
          });
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  readHandler = (id) => {
    console.log("Clicked");
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

    let resultShowingDiv = [classes.previewText2];
    let labelShowingDiv = [classes.labelDiv];
    let checkbox = null;

    if (this.state.result) {
      resultShowingDiv.push(classes.test);
      checkbox = this.state.labels.map((item, i) => {
        let spaceRemoval = item.replace(/\s/g, "");
        let dashRemoval = spaceRemoval.replace("-", "");
        let commaRemoval = dashRemoval.replace(/[,]/g, "");
        return (
          <label key={item}>
            <input
              className={classes.label}
              type="checkbox"
              key={item}
              checked={this.state.setLabel[commaRemoval]}
              disabled={!this.state.setLabel[commaRemoval]}
            />
            &nbsp; {item}
          </label>
        );
      });
      labelShowingDiv.push(classes.showlabel);
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
                First click on the dropdown model and select the model through
                which you want to test image.{" "}
              </li>
              <li>
                Then click on choose file option and select the satellite image.{" "}
              </li>
              <li>
                Make sure that the image selected by you is in tiff format.
              </li>
              <li> Also make sure image has 12 Channels. </li>
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
                After few seconds a list of all labels will be shown in form of
                checkboxes.
              </li>
              <li>
                Among all the checkboxes only those checkboxes will be checked
                that are returned from the model
              </li>
            </ul>
          </Task>
        </div>

        <h2>Upload Image For Classification</h2>
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
        <div className={labelShowingDiv.join(" ")}>{checkbox}</div>
      </div>
    );
  }
}

export default Classification;

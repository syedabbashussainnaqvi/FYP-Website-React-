import React from "react";
import classes from "./input.module.css";

const Input = (props) => {
  let inputElement = null;
  switch (props.inputtype) {
    case "input":
      inputElement = (
        <input
          {...props.elementConfig}
          className={classes.InputElement}
          onChange={props.changeHandler}
        />
      );
      break;
    case "textArea":
      inputElement = <textarea {...props} />;
      break;
    case "select":
      inputElement = (
        <select className={classes.select_css} onChange={props.changeHandler}>
          {props.elementConfig.options.map((value, index) => {
            return (
              <option key={index} value={value.value}>
                {value.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    case "checkbox":
      inputElement = (
        <label>
          <input
            {...props.elementConfig}
            className={classes.InputElement}
            onChange={props.changeHandler}
          />
          Check Me!
        </label>
      );
      break;
    default:
      break;
  }
  return (
    <div className={classes.Input}>
      <label className={classes.label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default Input;

import * as React from "react";
import "./Input.css";

const Input = (props) => {
  const newInput = {
    ...props,
    className: `custom-input ${props.className}`,
  };
  return <input {...newInput}>{props.children}</input>;
};

export default Input;

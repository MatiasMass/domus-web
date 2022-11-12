import * as React from "react";
import "./InputL.css";

const InputL = (props) => {
  const newInput = {
    ...props,
    className: `custom-input2 ${props.className}`,
  };
  return <input {...newInput}>{props.children}</input>;
};

export default InputL;
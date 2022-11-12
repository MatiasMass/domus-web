import * as React from "react";
import "./Button.css";

const Button = (props) => {
  const newProps = {
    ...props,
    className: `button-custom ${props.className}`,
  };
  return <button {...newProps}>{props.children}</button>;
};

export default Button;

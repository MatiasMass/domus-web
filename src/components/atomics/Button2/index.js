import * as React from "react";
import "./Button2.css";

const Button2 = (props) => {
  const newProps = {
    ...props,
    className: `button-custom2 ${props.className}`,
  };
  return <button {...newProps}>{props.children}</button>;
};

export default Button2;
import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  switch (props.type) {
    case "link":
      return link(props);

    default:
      return btn(props);
  }
};

const btn = (props) => (
  <button onClick={props.click} type="button" class="btn btn-primary">
    {props.children}
  </button>
);

const link = (props) => (
  <Link to={props.to}>
    <button type="button" class="btn btn-primary">
      {props.children}
    </button>
  </Link>
);

export default Button;

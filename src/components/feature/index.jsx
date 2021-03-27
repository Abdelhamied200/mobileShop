import React from "react";

const Feature = (props) => {
  return (
    <div className="feature">
      {props.label}:{" "}
      <span className="badge badge-secondary">{props.children}</span>
    </div>
  );
};

export default Feature;

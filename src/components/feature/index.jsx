import React from "react";

const Feature = (props) => {
  return (
    <div className="feature">
      {props.label}: <span class="badge badge-secondary">{props.children}</span>
    </div>
  );
};

export default Feature;

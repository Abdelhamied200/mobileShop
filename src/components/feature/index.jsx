import React from "react";

const Feature = (props) => {
  let data = props.children.replace("true", "yes");
  data = data.replace("false", "no");
  return (
    <div className="feature">
      <span className="badge badge-light">{props.label}</span>:{" "}
      <span className="badge badge-info">{data}</span>
    </div>
  );
};

export default Feature;

import React from "react";
import Feature from "../../components/feature";

const AboutPhone = (props) => {
  console.log(props.about);
  return (
    <div className="aboutPhone">
      {Object.keys(props.about).length === 0 ? (
        <div class="alert alert-info text-center" role="alert">
          click on phone to get more details
        </div>
      ) : (
        Object.values(props.about).map((feature) => (
          <Feature label={feature.lable}>{"" + feature.value}</Feature>
        ))
      )}
    </div>
  );
};

export default AboutPhone;

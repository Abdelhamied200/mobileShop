import React from "react";
import Button from "../../components/button";
import Field from "../../components/field";

const Add = (props) => {
  return (
    <div className="page">
      <div className="add">
        <div className="container my-4">
          <div className="row my-4 logo">
            <h3>Add Mobile</h3>
          </div>
          <div className="row my-4">
            <div className="col-lg-8 col-md-12">
              <Field label="Model" placeholder="Samsung S6" />
              <Field label="Manufacture year" placeholder="2015" />
              <Field
                type="dropdown"
                label="brand"
                list={["samsung", "sony", "apple", "nokia", "lg"]}
              />
              <Field
                type="dropdown"
                label="memory"
                list={["16GB", "32GB", "64GB", "128GB"]}
              />
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="row">
                <div className="col">
                  <Field type="checkbox" label="Dual SIM"></Field>
                  <Field type="checkbox" label="NFC"></Field>
                  <Field type="checkbox" label="4G"></Field>
                </div>
                <div className="col">
                  <Field
                    type="radio"
                    label="Screen"
                    list={['4"', '5"', '6"']}
                  ></Field>
                </div>
                <div className="col">
                  <Field
                    type="radio"
                    label="Color"
                    list={["white", "black", "gold"]}
                  ></Field>
                </div>
              </div>
            </div>
          </div>
          <div className="row my-4">
            <Button>Save</Button>
            <Button type="link" to="/">
              back
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

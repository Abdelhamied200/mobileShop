import React, { useState } from "react";
import Button from "../../components/button";
import Field from "../../components/field";

const Add = (props) => {
  const [errors, setErrors] = useState([]);
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
            <Button click={() => submit(setErrors, props)}>Save</Button>
            <Button type="link" to="/">
              back
            </Button>
          </div>
          <div className="row my-4" id="errors">
            {errors.map((error, i) => (
              <div key={i} className="alert alert-danger" role="alert">
                {error}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const submit = (setErrors, props) => {
  // inputs
  let model = document.querySelector("input[name='Model']").value;
  let year = +document.querySelector("input[name='Manufacture year']").value;

  // dropdowns
  let brand = document.querySelector("button[name='brand']").innerText;
  let memory = document.querySelector("button[name='memory']").innerText;

  // checks
  let dualsim = document.querySelector("input[name='Dual SIM']").checked;
  let nfc = document.querySelector("input[name='NFC']").checked;
  let net4g = document.querySelector("input[name='4G']").checked;

  // radios
  let screens = Array.from(document.querySelectorAll("input[name='Screen']"));
  let screen = null;
  screens.forEach((s) => {
    if (s.checked) screen = s.parentElement.querySelector("label").innerText;
  });
  let colors = Array.from(document.querySelectorAll("input[name='Color']"));
  let color = null;
  colors.forEach((c) => {
    if (c.checked) color = c.parentElement.querySelector("label").innerText;
  });

  let errors = [];
  // -- validation
  if (!model || model === "") {
    errors.push("model is required");
  }
  if (year === 0) {
    errors.push("year is required");
  } else {
    if (isNaN(year)) {
      errors.push("year must be a number");
    }
    if (year <= 1984) {
      errors.push("first invented phone was at 1984");
    }
    if (year > new Date().getFullYear()) {
      errors.push(
        "we are now at year: " +
          new Date().getFullYear() +
          " Are you from the future :)"
      );
    }
  }
  if (!screen) errors.push("screen is required");
  if (!color) errors.push("color is required");

  if (errors.length === 0) {
    let data = {
      model: {
        lable: "Model",
        value: model,
      },
      year: {
        lable: "Manufacture year",
        value: year,
      },
      brand: {
        lable: "Brand",
        value: brand,
      },
      memory: {
        lable: "Memory",
        value: memory,
      },
      dualsim: {
        lable: "Dual SIM",
        value: dualsim,
      },
      nfc: {
        lable: "NFC",
        value: nfc,
      },
      net4g: {
        lable: "4G",
        value: net4g,
      },
      screen: {
        lable: "Screen",
        value: screen,
      },
      color: {
        lable: "Color",
        value: color,
      },
    };
    let oldData = localStorage.getItem("data")
      ? JSON.parse(localStorage.getItem("data"))
      : [];
    let fullData = [...oldData, data];
    localStorage.setItem("data", JSON.stringify(fullData));
    setErrors([]);
    props.history.push("/");
  } else {
    setErrors(errors);
  }
};

export default Add;

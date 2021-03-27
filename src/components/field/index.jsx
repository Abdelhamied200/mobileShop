import React from "react";

const Field = (props) => {
  switch (props.type) {
    case "dropdown":
      return dropdown(props);
    case "checkbox":
      return checkbox(props);
    case "radio":
      return radioList(props);

    default:
      return input(props);
  }
};

const input = (props) => (
  <div className="field">
    <div className="container">
      <div className="form-group row align-items-center">
        <div className="col-2">
          <label>{props.label}</label>
        </div>
        <div className="col-10">
          <input
            type="text"
            className="form-control"
            name={props.label}
            placeholder={props.placeholder}
          />
        </div>
      </div>
    </div>
  </div>
);

const dropdown = (props) => (
  <div className="field">
    <div className="container">
      <div className="form-group row align-items-center">
        <div className="col-2">
          <label>{props.label}</label>
        </div>
        <div className="col-10">
          <div className={"dropdown " + props.className}>
            <button
              className="btn btn-outline-secondary dropdown-toggle w-100"
              type="button"
              id="main"
              name={props.label}
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={open}
            >
              {props.list[0]}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
              {props.list.map((item, i) => (
                <button
                  onClick={select}
                  className="dropdown-item"
                  type="button"
                  key={i}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
const checkbox = (props) => (
  <div className="field">
    <div className="form-check">
      <input
        className="form-check-input"
        name={props.label}
        type="checkbox"
        value=""
      />
      <label className="form-check-label">{props.label}</label>
    </div>
  </div>
);
const radioList = (props) => (
  <div className="field">
    <div className="container">
      <div className="form-group row">
        <form>
          <div className="col">
            <label>{props.label}</label>
          </div>
          <div className="col">
            {props.list.map((item, i) => (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name={props.label}
                  key={i}
                />
                <label className="form-check-label">{item}</label>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  </div>
);

const select = (e) => {
  let dropdown = e.target.parentElement.parentElement;
  let text = e.target.innerText;
  let btn = dropdown.querySelector(".dropdown button#main");
  btn.innerText = text;
  let menu = dropdown.querySelector(".dropdown-menu");
  menu.style.display = "none";
};
const open = (e) => {
  let menus = Array.from(document.querySelectorAll(".dropdown-menu"));
  let menu = e.target.parentElement.querySelector(".dropdown-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menus.forEach((menu) => {
      menu.style.display = "none";
    });
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
};

export default Field;

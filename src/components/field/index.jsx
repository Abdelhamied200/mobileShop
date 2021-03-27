import React from "react";

const Field = (props) => {
  switch (props.type) {
    case "dropdown":
      return dropdown(props);

    default:
      return input(props);
  }
};

const input = (props) => (
  <div className="field">
    <div className="container">
      <div className="form-group row w-60">
        <div className="col">
          <label>{props.label}</label>
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
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
      <div className="form-group row w-60">
        <div className="col">
          <label>{props.label}</label>
        </div>
        <div className="col">
          <div class={"dropdown " + props.className}>
            <button
              class="btn btn-primary dropdown-toggle"
              type="button"
              id="main"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              onClick={open}
            >
              {props.list[0]}
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
              {props.list.map((item) => (
                <button onClick={select} class="dropdown-item" type="button">
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

const select = (e) => {
  let dropdown = e.target.parentElement.parentElement;
  let text = e.target.innerText;
  let btn = dropdown.querySelector(".dropdown button#main");
  btn.innerText = text;
  let menu = dropdown.querySelector(".dropdown-menu");
  menu.style.display = "none";
};
const open = (e) => {
  let menu = e.target.parentElement.querySelector(".dropdown-menu");
  if (menu.style.display === "none" || menu.style.display === "") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
    console.log("heer");
  }
};

export default Field;

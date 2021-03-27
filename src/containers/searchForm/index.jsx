import React from "react";
import Button from "../../components/button";
import Field from "../../components/field";

const SearchForm = (props) => {
  return (
    <div className="search-form my-4">
      <div className="form">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-10">
              <Field label="model" placeholder="Samsung S6"></Field>
              <Field
                type="dropdown"
                label="brand"
                list={["All", "samsung", "sony", "apple", "nokia", "lg"]}
              ></Field>
            </div>
            <div className="col-2">
              <Button click={() => search(props.setData)}>search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const search = (setData) => {
  let model = document.querySelector("input[name='model']").value;
  let brand = document.querySelector("button[name='brand']").innerText;

  let data = JSON.parse(localStorage.getItem("data"));
  let res = data.filter((element) => {
    if (brand === "All") {
      if (element.model.value.includes(model)) {
        return true;
      }
    } else {
      if (
        element.model.value.includes(model) &&
        element.brand.value.includes(brand)
      ) {
        return true;
      }
    }
  });

  setData(res);
};

export default SearchForm;

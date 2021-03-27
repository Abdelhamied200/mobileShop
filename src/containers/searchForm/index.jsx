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
                list={["samsung", "sony", "apple", "nokia", "lg"]}
              ></Field>
            </div>
            <div className="col-2">
              <Button>search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

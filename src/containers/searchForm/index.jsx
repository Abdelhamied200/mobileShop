import React from "react";
import Button from "../../components/button";
import Field from "../../components/field";

import "./searchform.scss";

const SearchForm = (props) => {
  return (
    <div className="search-form">
      <div className="form">
        <div className="container">
          <div className="row">
            <div className="col">
              <Field label="model" placeholder="Samsung S6"></Field>
              <Field
                type="dropdown"
                label="brand"
                list={["samsung", "sony", "apple", "nokia", "lg"]}
              ></Field>
            </div>
            <div className="col">
              <Button>search</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;

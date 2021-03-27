import React from "react";
import Button from "../button";

const Navbar = (props) => {
  return (
    <div className="navbar my-4">
      <div className="container">
        <div className="row w-100">
          <div className="col logo">
            <h3>Mobile Shop</h3>
          </div>
          <div className="col text-right">
            <Button type="link" to="/add">
              Add Item
            </Button>
            <Button
              click={() => {
                localStorage.clear();
                props.setData(null);
              }}
            >
              Remove All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

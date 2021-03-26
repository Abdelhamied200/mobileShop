import React from "react";
import { Button } from "react-bootstrap";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div class="row w-100">
          <div class="col logo">
            <h3>Mobile Shop Application</h3>
          </div>
          <div class="col text-right">
            <Button variant="primary">Add item</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

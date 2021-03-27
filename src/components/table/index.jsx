import React from "react";
import { Link } from "react-router-dom";

import "./table.scss";

const Table = (props) => {
  return (
    <div className="table container my-4">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {props.heads.map((head, i) => (
              <th scope="col" key={i}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.body
            ? props.body.map((row, i) => (
                <tr key={i} onClick={() => props.setCurrent(row)}>
                  <td>{row.brand.value}</td>
                  <td>{row.model.value}</td>
                  <td>{row.year.value}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
      {props.body ? (
        props.body.length !== 0 ? (
          ""
        ) : (
          <div
            className="alert alert-primary w-50 m-auto text-center"
            role="alert"
          >
            no phones added yet <Link to="/add">add</Link>
          </div>
        )
      ) : (
        ""
      )}
    </div>
  );
};

export default Table;

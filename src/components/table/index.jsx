import React from "react";
import { Link } from "react-router-dom";

const Table = (props) => {
  return (
    <div className="table container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            {props.heads.map((head) => (
              <th scope="col">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.body
            ? props.body.map((row) => {
                let tds = row.map((t) => <td>{t}</td>);
                return <tr>{tds}</tr>;
              })
            : ""}
        </tbody>
      </table>
      {props.body ? (
        ""
      ) : (
        <div class="alert alert-primary w-50 m-auto text-center" role="alert">
          no phones added yet <Link to="/add">add</Link>
        </div>
      )}
    </div>
  );
};

export default Table;

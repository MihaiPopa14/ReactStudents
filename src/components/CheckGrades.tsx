import "./CheckGrades.css";

import { Link } from "react-router-dom";
import React from "react";

const CheckGrades = () => {
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Grades</h1>
        <h3>Student name</h3>
        <table className="style-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>123</th>
              <th>Lorem.</th>
              <th>2</th>
            </tr>
            <tr>
              <th>345</th>
              <th>sdadsad</th>
              <th>12</th>
            </tr>
            <tr>
              <th>567</th>
              <th>Lords</th>
              <th>6</th>
            </tr>
          </tbody>
        </table>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckGrades;

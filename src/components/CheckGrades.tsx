import './CheckGrades.css';

import { Link } from 'react-router-dom';
import React from 'react';

const CheckGrades = () => {
  return (
    <div className="container">
      <div className="mainContent">
        <h1 className="gradesTitle">Grades</h1>
        <div className="studentSearch">
          <label htmlFor="">Student name</label>
          <input type="text" />
          <button className="searchButton">Search</button>
        </div>
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
        <Link to={'/'}>
          <button className="backButton">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckGrades;

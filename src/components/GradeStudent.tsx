import "./GradeStudent.css";

import { Link } from "react-router-dom";
import React from "react";

const GradeStudent = () => {
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Grade a student</h1>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Subject name</label>
          <input type="text" />
          <label htmlFor="">Grade</label>
          <input type="text" />
          <input type="submit" value="Submit" />
        </form>
        <Link to={"/"}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default GradeStudent;

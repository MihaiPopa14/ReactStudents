import "./Main.css";

import { Link } from "react-router-dom";
import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Main = () => {
  //   setAddStudent,
  //   setShowMain,
  // }: {
  //   setAddStudent: Function;
  //   setShowMain: Function;
  // }) => {
  return (
    <div className="container">
      <div className="mainContent-app">
        <div className="leftSide">
          <h1>Students</h1>
          <Link to={"/AddStudent"}>
            <button className="hoverEffect">Add Student</button>
          </Link>
          <Link to={"/ViewStudents"}>
            <button className="hoverEffect">View Students</button>
          </Link>
        </div>
        <hr />
        <div className="rightSide">
          <h1>Grades</h1>
          <Link to={"/GradeStudent"}>
            <button className="hoverEffect">Grade Student</button>
          </Link>
          <Link to={"/CheckGrades"}>
            <button className="hoverEffect">Check Grades</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

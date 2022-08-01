import "./Main.css";

import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
const Main = ({
  setAddStudent,
  setShowMain,
}: {
  setAddStudent: Function;
  setShowMain: Function;
}) => {
  return (
    <div className="container">
      <div className="mainContent">
        <div className="leftSide">
          <h1>Students</h1>
          <button
            className="hoverEffect"
            onClick={() => {
              setAddStudent(true);
              setShowMain(false);
            }}
          >
            Add Student
          </button>
          <button className="hoverEffect">View Students</button>
        </div>
        <hr />
        <div className="rightSide">
          <h1>Grades</h1>
          <button className="hoverEffect">Grade Student</button>
          <button className="hoverEffect">Check Grades</button>
        </div>
      </div>
    </div>
  );
};

export default Main;

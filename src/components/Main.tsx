import './Main.css';

import { Link } from 'react-router-dom';
import React from 'react';

const Main = () => {
  return (
    <div className="container">
      <div className="mainContent-app">
        <div className="leftSide">
          <h1>Students</h1>
          <Link to={'/students/new'}>
            <button className="hoverEffect">Add Student</button>
          </Link>
          <Link to={'/students'}>
            <button className="hoverEffect">View Students</button>
          </Link>
        </div>
        <hr />
        <div className="rightSide">
          <h1>Grades</h1>
          <Link to={'/students/grade'}>
            <button className="hoverEffect">Grade Student</button>
          </Link>
          <Link to={'/students/grades'}>
            <button className="hoverEffect">Check Grades</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

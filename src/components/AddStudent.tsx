import "./AddStudent.css";

import { Link } from "react-router-dom";
import React from "react";

const AddStudent = () => {
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Add a student</h1>
        <form action="">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Class number</label>
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

export default AddStudent;

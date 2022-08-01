import "./App.css";

import React, { useState } from "react";

import AddStudent from "./components/AddStudent";
import CheckGrades from "./components/CheckGrades";
import GradeStudent from "./components/GradeStudent";
import Main from "./components/Main";
import ViewStudents from "./components/ViewStudents";
import logo from "./logo.svg";

function App() {
  const [addStudent, setAddStudent] = useState(false);
  const [showMain, setShowMain] = useState(true);

  const showAddStudent = () => {
    setAddStudent(true);
    setShowMain(false);
  };

  //<GradeStudent></GradeStudent>
  //<ViewStudents></ViewStudents>
  //<CheckGrades></CheckGrades>
  return (
    <>
      {showMain && (
        <Main setAddStudent={setAddStudent} setShowMain={setShowMain} />
      )}
      {addStudent && <AddStudent />}
    </>
  );
}

export default App;

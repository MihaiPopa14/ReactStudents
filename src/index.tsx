import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import AddStudent from "./components/AddStudent";
import App from "./App";
import CheckGrades from "./components/CheckGrades";
import GradeStudent from "./components/GradeStudent";
import Main from "./components/Main";
import React from "react";
import ReactDOM from "react-dom/client";
import ViewStudents from "./components/ViewStudents";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/AddStudent" element={<AddStudent />}></Route>
      <Route path="/ViewStudents" element={<ViewStudents />}></Route>
      <Route path="/GradeStudent" element={<GradeStudent />}></Route>
      <Route path="/CheckGrades" element={<CheckGrades />}></Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

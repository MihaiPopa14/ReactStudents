import './App.css';

import { Route, Routes } from 'react-router-dom';

import AddStudent from './components/AddStudent';
import CheckGrades from './components/CheckGrades';
import GradeStudent from './components/GradeStudent';
import Main from './components/Main';
import React from 'react';
import ViewStudents from './components/ViewStudents';

function App() {
  // const element = useRoutes([
  //   { path: '/', element: <Main /> },
  //   {
  //     path: 'students',
  //     element: <ViewStudents />,
  //     children: [
  //       { path: 'new', element: <AddStudent /> },
  //       { path: 'grade', element: <GradeStudent /> },
  //       { path: 'grades', element: <CheckGrades /> }
  //     ]
  //   }
  // ]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/students" element={<ViewStudents />}></Route>
        <Route path="/students/new" element={<AddStudent />}></Route>
        <Route path="/students/grade" element={<GradeStudent />}></Route>
        <Route path="/students/grades" element={<CheckGrades />}></Route>
      </Routes>
    </>
  );
}

export default App;

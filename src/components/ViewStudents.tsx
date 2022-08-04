import './ViewStudents.css';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Student } from '../types/Student';
import ky from 'ky';

const ViewStudents = () => {
  const [students, setStudent] = useState<Array<Student>>([]);
  useEffect(() => {
    const fetchStudentData = async () => {
      const response: Array<Student> = await ky.get('http://localhost:5000/students').json();
      console.log(response);
      setStudent(response);
    };
    fetchStudentData();
  }, []);

  const renderStudents = students.map((student, index) => {
    return (
      <tr key={`rowKey-${index}`}>
        {/* <th>{student.id}</th> */}
        <th>{student.name}</th>
        <th>{student.classNr}</th>
      </tr>
    );
  });
  return (
    <div className="container">
      <div className="mainContent">
        <h1>Student List</h1>
        <table className="style-table">
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Class number</th>
            </tr>
          </thead>
          <tbody>{renderStudents}</tbody>
        </table>
        <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default ViewStudents;

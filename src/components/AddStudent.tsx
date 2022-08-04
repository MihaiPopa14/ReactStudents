import './AddStudent.css';

import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import { Student } from '../types/Student';
import ky from 'ky';

const AddStudent = () => {
  const [students, setStudent] = useState<Array<Student>>([]);
  useEffect(() => {
    const createStudent = async () => {
      const response: Array<Student> = await ky.post('http://localhost:5000/students').json();
      console.log(response);
      setStudent(response);
    };
    createStudent();
  }, []);

  const handleSubmit = async (event: any) => {
    //validate

    const response: Array<Student> = await ky
      .post('http://localhost:5000/students', {
        json: {
          name: event.target.elements.studentName.value,
          classNr: event.target.elements.studentClassNr.value
        }
      })
      .json();

    //validate

    console.log(response);
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="mainContent">
        <h1>Add a student</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="">Name</label>
          <input type="text" name="studentName" />
          <label htmlFor="">Class number</label>
          <input type="text" name="studentClassNr" />
          <input type="submit" value="Submit" />
        </form>
        <Link to={'/'}>
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default AddStudent;

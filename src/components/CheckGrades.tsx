import './CheckGrades.css';

import React, { useEffect, useState } from 'react';

import { Grades } from '../types/Grades';
import { Link } from 'react-router-dom';
import { Student } from '../types/Student';
import ky from 'ky';

const CheckGrades = () => {
  const [grades, setGrades] = useState<Array<Grades>>([]);
  useEffect(() => {
    const fetchGradeData = async () => {
      const response: Array<Grades> = await ky.get('http://localhost:5000/grades').json();
      console.log(response);
      setGrades(response);
    };
    fetchGradeData();
  }, []);

  const handleSearch = async (event: any) => {
    const srcStudName = event.target.elements.searchedStudent.value;
    if (srcStudName.trim() === '' || srcStudName.length < 3) {
      alert('Name is required and it should not be less than 3 characters!');
      return;
    }
  };

  const renderGrades = grades.map((grade, index) => {
    return (
      <tr key={`rowKey-${index}`}>
        <th>{grade.subject}</th>
        <th>{grade.grade}</th>
      </tr>
    );
  });

  return (
    <div className="container">
      <div className="mainContent">
        <h1 className="gradesTitle">Grades</h1>
        <div className="studentSearch">
          <label htmlFor="">Student name</label>
          <input type="text" name="searchedStudent" />
          <button className="searchButton">Search</button>
        </div>
        <table className="style-table">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>{renderGrades}</tbody>
        </table>
        <Link to={'/'}>
          <button className="backButton">Back</button>
        </Link>
      </div>
    </div>
  );
};

export default CheckGrades;

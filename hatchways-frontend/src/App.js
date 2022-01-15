// import "./App.css";
import Student from "./components/Student";
import StudentDetail from "./components/StudentDetails";
import { useState, useEffect } from "react";

function App() {
  const [students, setDetails] = useState([]);

  useEffect(() => {
    const getStudents = async () => {
      const studentsFromServer = await fetchStudents();
      setDetails(studentsFromServer);
    };
    getStudents();
  }, []);

  //  Fetch students from server
  const fetchStudents = async () => {
    const res = await fetch("https://api.hatchways.io/assessment/students");
    const data = await res.json();
    // console.log(data.students);
    return data.students;
  };

  // View Grades
  const viewGrades = (id) => {
    console.log("view Grades!!!", id);
    // setDetails(details.filter((detail) => detail.id !== id));
  };

  return (
    <div className="container">
      <Student />
      <StudentDetail students={students} onViewGrades={viewGrades} />
    </div>
  );
}

export default App;

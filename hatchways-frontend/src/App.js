import "./App.css";
import Student from "./components/Student";
import StudentDetail from "./components/StudentDetails";
import { useState } from "react";

function App() {
  const [details, setDetails] = useState([
    {
      city: "Fush\u00eb-Muhurr",
      company: "Yadel",
      email: "iorton0@imdb.com",
      firstName: "Ingaberg",
      grades: ["78", "100", "92", "86", "89", "88", "91", "87"],
      id: 1,
      lastName: "Orton",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasdictablanditiis.jpg",
      skill: "Oracle",
    },
    {
      city: "Sanghan",
      company: "Avamm",
      email: "cboards1@weibo.com",
      firstName: "Clarke",
      grades: ["75", "89", "95", "93", "99", "82", "89", "76"],
      id: 2,
      lastName: "Boards",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/voluptasautreprehenderit.jpg",
      skill: "Sports",
    },
    {
      city: "Kugesi",
      company: "Skalith",
      email: "lromanet2@wired.com",
      firstName: "Laurens",
      grades: ["88", "90", "79", "82", "81", "99", "94", "73"],
      id: 3,
      lastName: "Romanet",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/aspernaturnonsapiente.jpg",
      skill: "Employee Handbooks",
    },
  ]);

  return (
    <div className="container">
      <Student />
      <StudentDetail details={details} />
    </div>
  );
}

export default App;

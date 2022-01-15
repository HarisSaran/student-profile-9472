// import "./App.css";
import Student from "./components/Student";
import StudentDetail from "./components/StudentDetails";
import { useState } from "react";

function App() {
  const [students, setDetails] = useState([
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
    {
      city: "Krajan",
      company: "Mybuzz",
      email: "bskitt3@aboutads.info",
      firstName: "Berti",
      grades: ["88", "93", "92", "81", "95", "98", "77", "94"],
      id: "4",
      lastName: "Skitt",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg",
      skill: "Nutrition Education",
    },
    {
      city: "Huiqi",
      company: "Avavee",
      email: "msummerley4@craigslist.org",
      firstName: "Mureil",
      grades: ["71", "81", "72", "92", "79", "82", "91", "90"],
      id: "5",
      lastName: "Summerley",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/consequaturdelectusquis.jpg",
      skill: "ISO 14971",
    },
    {
      city: "Jianghong",
      company: "Twinte",
      email: "rcoryndon5@cargocollective.com",
      firstName: "Robbyn",
      grades: ["97", "92", "72", "99", "92", "92", "79", "96"],
      id: "6",
      lastName: "Coryndon",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autautdeserunt.jpg",
      skill: "Cinema 4D",
    },
    {
      city: "Sanxi",
      company: "Buzzster",
      email: "seykel6@examiner.com",
      firstName: "Sheena",
      grades: ["74", "95", "75", "95", "85", "97", "88", "85"],
      id: "7",
      lastName: "Eykel",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg",
      skill: "Ulead VideoStudio",
    },
    {
      city: "Huancheng",
      company: "Edgeblab",
      email: "mewen7@ycombinator.com",
      firstName: "Minnnie",
      grades: ["80", "100", "97", "78", "99", "99", "76", "85"],
      id: "8",
      lastName: "Ewen",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/nesciuntrerumlibero.jpg",
      skill: "Vulcan",
    },
    {
      city: "Luoxiong",
      company: "Fadeo",
      email: "riban8@hubpages.com",
      firstName: "Rory",
      grades: ["70", "100", "75", "96", "83", "90", "94", "92"],
      id: "9",
      lastName: "Iban",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/autemporroplaceat.jpg",
      skill: "EE4",
    },
    {
      city: "Toulon",
      company: "Yakidoo",
      email: "lroxby9@cam.ac.uk",
      firstName: "Lenna",
      grades: ["70", "99", "81", "83", "78", "95", "81", "76"],
      id: "10",
      lastName: "Roxby",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/doloribusquitempora.jpg",
      skill: "LPS",
    },
    {
      city: "Lazo",
      company: "Photolist",
      email: "rfitzalana@parallels.com",
      firstName: "Rosalynd",
      grades: ["98", "93", "78", "87", "99", "89", "97", "81"],
      id: "11",
      lastName: "FitzAlan",
      pic: "https://storage.googleapis.com/hatchways-app.appspot.com/assessments/data/frontend/images/utquamut.jpg",
      skill: "Geography",
    },
  ]);

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

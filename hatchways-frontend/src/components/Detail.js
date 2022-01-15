import { BiPlusMedical } from "react-icons/bi";
// import { BiMinus } from "react-icons/bi";

const Detail = ({ student, onViewGrades }) => {
  return (
    <div className="detail">
      <h1>
        {student.firstName.toUpperCase() + " " + student.lastName.toUpperCase()}{" "}
        <BiPlusMedical
          style={{ color: "grey" }}
          // onClick={() => onViewGrades(detail.grades)}
          onClick={() => onViewGrades(student.id)}
        />
      </h1>
      <div className="initial">
        <img src={student.pic} alt="oops, nothing found!" />
        <p>Email: {student.email} </p>
        <p>Company: {student.company}</p>
        <p>Skill: {student.skill}</p>
        <p>Average: {student.skill}</p>
      </div>
    </div>
  );
};

export default Detail;

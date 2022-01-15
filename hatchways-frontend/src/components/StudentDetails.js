import Detail from "./Detail";
// import Button from "./Button";

const StudentDetail = ({ students, onViewGrades }) => {
  // const onClick = () => {
  //   console.log("you Clicked");
  // };

  return (
    <>
      {students.map((student, index) => (
        <Detail key={index} student={student} onViewGrades={onViewGrades} />
      ))}
    </>
  );
};

export default StudentDetail;

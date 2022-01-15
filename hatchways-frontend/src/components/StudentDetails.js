import Detail from "./Detail";
// import Button from "./Button";

const StudentDetail = ({ details, onViewGrades }) => {
  // const onClick = () => {
  //   console.log("you Clicked");
  // };

  return (
    <>
      {details.map((detail) => (
        <Detail key={detail.id} detail={detail} onViewGrades={onViewGrades} />
      ))}
    </>
  );
};

export default StudentDetail;

import Detail from "./Detail";

const StudentDetail = ({ details }) => {
  return (
    <>
      {details.map((detail) => (
        <Detail key={detail.id} detail={detail} />
      ))}
    </>
  );
};

export default StudentDetail;

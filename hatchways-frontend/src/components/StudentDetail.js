const StudentDetail = ({ details }) => {
  return (
    <>
      {details.map((details) => (
        <h3 key={details.id}>{details.city}</h3>
      ))}
    </>
  );
};

export default StudentDetail;

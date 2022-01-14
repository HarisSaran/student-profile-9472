const Detail = ({ detail }) => {
  return (
    <div className="detail">
      <h3>{detail.firstName + " " + detail.lastName}</h3>
      <p>Email: {detail.email}</p>
      <p>Company: {detail.company}</p>
      <p>Skill: {detail.skill}</p>
      <p>Average: {detail.skill}</p>
      {/* <p>{detail.pic}</p> */}
    </div>
  );
};

export default Detail;

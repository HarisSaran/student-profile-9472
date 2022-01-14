import { BiPlusMedical } from "react-icons/bi";

const Detail = ({ detail }) => {
  return (
    <div className="detail">
      <h2>
        {detail.firstName + " " + detail.lastName}{" "}
        <BiPlusMedical style={{ color: "grey" }} />
      </h2>
      <p>Email: {detail.email}</p>
      <p>Company: {detail.company}</p>
      <p>Skill: {detail.skill}</p>
      <p>Average: {detail.skill}</p>
      <img src={detail.pic} alt="oops, nothing found!" />
      {/* <p>{detail.pic}</p> */}
    </div>
  );
};

export default Detail;

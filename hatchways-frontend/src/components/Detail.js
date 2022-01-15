import { BiPlusMedical } from "react-icons/bi";

const Detail = ({ detail }) => {
  return (
    <div className="detail">
      <h1>
        {detail.firstName.toUpperCase() + " " + detail.lastName.toUpperCase()}{" "}
        <BiPlusMedical style={{ color: "grey" }} />
      </h1>
      <div className="initial">
        <img src={detail.pic} alt="oops, nothing found!" />
        <p>Email: {detail.email} </p>
        <p>Company: {detail.company}</p>
        <p>Skill: {detail.skill}</p>
        <p>Average: {detail.skill}</p>
      </div>
    </div>
  );
};

export default Detail;

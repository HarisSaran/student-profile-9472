import PropTypes from "prop-types";
import Button from "./Button";

const Student = ({ title }) => {
  const onClick = () => {
    console.log("you Clicked");
  };

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="blue" text="HI hi Hi" onClick={onClick} />
    </header>
  );
};

// CSS in JS (Pass in h1 tag)
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

Student.defaultProps = {
  title: "Name goes here",
};

Student.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Student;

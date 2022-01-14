// import React from 'react'
import PropTypes from "prop-types";

const Student = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
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

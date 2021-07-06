import PropTypes from "prop-types";
import React from "react";

function Student(props) {
  return (
    <div>
      Name: {props.name}
      <br />
      Roll: {props.roll}
      <br />
      Class:{props.class}
    </div>
  );
}

Student.defaultProps = {
  name: "Peter",
  roll: 121,
  class: 11
};

Student.propTypes = {
  name: PropTypes.string,
  roll: PropTypes.number,
  class: PropTypes.number
};

export default Student;

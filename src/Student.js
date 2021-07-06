import PropTypes from 'prop-types';
import React from 'react';

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
  roll: 121,
  class: 11
};

Student.propTypes = {
  //is Required propType
  name: PropTypes.string.isRequired,
  roll: PropTypes.number,
  class: PropTypes.number
};

export default Student;

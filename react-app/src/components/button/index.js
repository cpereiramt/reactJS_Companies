import React from "react";
import { ButtonEl } from "../button/style";
import PropTypes from "prop-types";

const Button = ({ clickEvent, label }) => {
  return <ButtonEl onClick={() => clickEvent()}>{label}</ButtonEl>;
};

Button.propTypes = {
  clickEvent: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};
export default Button;

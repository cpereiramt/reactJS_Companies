import React from "react";
import { ButtonEl } from "../button/style";

const Button = ({ clickEvent, label }) => {
  return <ButtonEl onClick={() => clickEvent()}>{label}</ButtonEl>;
};

export default Button;

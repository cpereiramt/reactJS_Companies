import React from "react";
import { lightTheme, darkTheme } from "../../styles/theme";
import Button from "../button";
import PropTypes from "prop-types";
const ButtonSetTheme = ({ setThemeFunction, theme }) => {
  const setTheme = () => {
    if (theme === lightTheme) {
      console.log("dark theme");
      setThemeFunction(darkTheme);
    } else {
      console.log("light theme");

      setThemeFunction(lightTheme);
    }
  };
  return <Button clickEvent={() => setTheme()} label="Toggle Theme" />;
};
ButtonSetTheme.propTypes = {
  setThemeFunction: PropTypes.func.isRequired,
  theme: PropTypes.object.isRequired,
};
export default ButtonSetTheme;

import React from "react";
import { lightTheme, darkTheme } from "../../styles/theme";

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
  return <button onClick={() => setTheme()}>ButtonSetTheme</button>;
};

export default ButtonSetTheme;

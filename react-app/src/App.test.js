import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { lightTheme, darkTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

import App from "./App";

describe("App", () => {
  test("==>  theme changing test", () => {
    let toogleThemeButton;
    const setStateMock = jest.fn();
    const useStateMock = (theme) => [theme, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    render(<App />);
    toogleThemeButton = screen.getByText("Toggle Theme");
    fireEvent.click(toogleThemeButton);
    expect(setStateMock).toHaveBeenCalledWith(darkTheme);
  });
});

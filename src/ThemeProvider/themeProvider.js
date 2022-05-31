import { createContext, createElement } from "react";

export const Theme = createContext();

const ThemeProvider = (props) => {
  let theme = {
    primary: "black",
    secondary: "green",
  };
  return createElement(Theme.Provider, { value: theme }, props.children);
};

export default ThemeProvider;

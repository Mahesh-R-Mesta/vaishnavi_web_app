import { createContext, createElement } from "react";

export const Theme = createContext();

const ThemeProvider = (props) => {
  return createElement(Theme.Provider, { theme: {} }, props.children);
};

export default ThemeProvider;

import React from "react";
import AdminMain from "./main";
import ThemeProvider from "../../ThemeProvider/themeProvider";
import { Provider } from "react-redux";
import { createStore } from "redux";

const inits = {
  type: "rocket",
  value: "sdfsf",
};

const fun = (s = inits, a) => {
  if (a.type === "drawer") {
    console.log(`drawer log ${a.value} `);
  }
  return a;
};
const store = createStore(fun);
class AdminScreen extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider>
          <AdminMain />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default AdminScreen;

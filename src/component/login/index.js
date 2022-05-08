import React from "react";
import Navbar from "./header";
import LoginCard from "./main";

class LoginScreen extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <LoginCard />
      </div>
    );
  }
}

export default LoginScreen;

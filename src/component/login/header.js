import React from "react";
import Logo from "../../assets/vaishnavi.png";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <img src={Logo} className="logo" alt="Logo" />
        <div className="navbar-brand">
          <h2 className="text-light text-center">Vaishnavi Pickels</h2>
        </div>
        <div className="collapse navbar-collapse"></div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Avatar, Hidden } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";
// import { connect } from "react-redux";
import {
  faBoxes,
  faClockRotateLeft,
  faList,
  faShop,
} from "@fortawesome/free-solid-svg-icons";
import Logo from "./../../assets/vaishnavi.png";
import "./styles.css";
import { connect } from "react-redux";
import AdminRouting from "./adminRoutings";
import { useNavigate } from "react-router-dom";
import drawerItems from "./constants/drawerItems";

const useStyle = {
  menuItem: {
    listStyleType: "none",
    padding: "10px 0px 10px 10px",
    fontWeight: "500",
  },
};

const iconSpacing = {
  paddingRight: "5px",
};

function AdminMain(props) {
  const [inbox, setInbox] = useState(1);
  const nav = useNavigate();
  const CustomMenuItem = (props) => {
    const { icon } = props;
    return (
      <MenuItem
        className="menuItem"
        icon={<FontAwesomeIcon style={iconSpacing} icon={icon} />}
        onClick={() => props.onClick()}
      >
        {props.title}
      </MenuItem>
    );
  };

  return (
    <div style={{ display: "  flex" }}>
      <ProSidebar
        className="sideBar"
        width="10rem"
        collapsed={false}
        collapsedWidth="5rem"
        style={{ height: "100vh" }}
      >
        <Menu iconShape="rounded">
          <MenuItem
            style={useStyle.menuItem}
            icon={
              <Avatar
                className="ms-4"
                variant="rounded"
                style={{ width: "60px", height: "60px" }}
              >
                <img
                  src={Logo}
                  alt="logo"
                  style={{ width: "60px", height: "60px" }}
                />
              </Avatar>
            }
          >
            <p style={{ alignContent: "center", fontSize: "10px" }}>
              VAISHNAVI PRODUCTS
            </p>
          </MenuItem>
          {drawerItems.map((each) => {
            return (
              <CustomMenuItem
                title={each.title}
                icon={each.icon}
                key={each.title}
                onClick={() => nav(each.route)}
              />
            );
          })}
        </Menu>
      </ProSidebar>
      <div>
        <h1 className="headerText">VAISHNAVI PICKLES</h1>
        <Hidden>
          <AdminRouting />
        </Hidden>
      </div>
    </div>
  );
}

const mapStateProps = (state) => {
  console.log(state);
  return {
    mysate: state,
  };
};

const mapStateDispatch = (dispatch) => {
  return {
    testIt: () => dispatch({ type: "drawer", value: " Middle" }),
  };
};

export default connect(mapStateProps, mapStateDispatch)(AdminMain);

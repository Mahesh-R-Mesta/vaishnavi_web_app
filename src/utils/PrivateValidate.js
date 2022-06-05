import { Route, Navigate } from "react-router-dom";
// import {useState,useEffect} from 'react';
// import ApiRequest from "../config/apiRequest";
// import URL from "./urls";
// import StatusCode from "../config/status";
// import { checkboxClasses } from "@mui/material";
// import { render } from "@testing-library/react";

class  PrivateValidate  {
  constructor(props){
    this.state = props;
  }

render(){
  return true ?
    <Route
    exact
    path={this.state.path}
    component={<Navigate redirect={true} to={this.state.component} />}
  />
:
    <Route
    exact
    path={this.state.path}
    component={<div>Loading</div>}
  />;
}
}

// const [isValid,setValid] = useState(false);
// const call = async ()=>{
//   const response = await ApiRequest.call('GET',URL.isLogin);
//   if(response.data.isLoggedIn){
//     setValid(response.data.isLoggedIn)
//   } 
// }
// useEffect(()=>{
//   call();
// })

export default PrivateValidate;

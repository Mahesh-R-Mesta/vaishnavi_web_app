import { Route, Navigate } from "react-router-dom";

function PrivateValidate(props) {
  <Route
    exact
    path={props.from}
    component={<Navigate redirect={true} to={props.to} />}
  />;
}

export default PrivateValidate;

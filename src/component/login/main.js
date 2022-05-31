import React, { useEffect, useState } from "react";
import { Card, Divider, Typography } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import Validator from "../../utils/validator";
import ApiRequest from "../../config/apiRequest";
import URL from "../../utils/urls";

// const useStyle = makeStyles((theme) => ({}));

function LoginCard(props) {
  const [welcome, setWelcome] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const login = async () => {
    const validator = new Validator();
    if (
      validator.isStringValid(userName) &&
      validator.isStringValid(password)
    ) {
      // const api = new ApiRequest();
      const response = await ApiRequest.call("POST", URL.accountLogin, {
        username: userName,
        password: password,
      });
      console.log(response);
      if (response != null) {
        navigate("/admin");
      }
    } else {
      toast("Please Enter all the fields");
    }
  };
  useEffect(() => {
    if (welcome) {
      toast("Welcome");
      setWelcome(false);
    }
  }, []);

  return (
    <main>
      <Card
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          padding: "1rem",
          boxShadow: "1px 1px 1px 1px gray",
          width: "20rem",
        }}
      >
        <Typography className="position-relative" variant="h6" fontWeight={800}>
          LogIn
        </Typography>
        <Divider className="mt-2 mb-2" />
        <div className="mb-3">
          <Typography variant="body2" fontWeight={600}>
            Username
          </Typography>
          <input
            className="form-control"
            type="text"
            placeholder="User ID"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="mb-3"></div>
        <Typography variant="body2" fontWeight={600}>
          Password
        </Typography>

        <input
          className="form-control"
          type="text"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="row">
          <div className="mx-auto mt-2">
            <Divider className="mt-2 mb-3" />
            <input
              className="btn btn-primary"
              type="button"
              value="Login"
              onClick={() => login()}
            />
          </div>
        </div>
      </Card>
      <ToastContainer />
    </main>
  );
}

export default LoginCard;

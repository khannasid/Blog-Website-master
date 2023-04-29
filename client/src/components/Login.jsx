import React, { useState, useEffect } from "react";
import { Box, Button, TextField, styled, Typography } from "@mui/material";
import { signUpDetail, userLoginDetails } from "../service/api.js";
import { useAlert } from "react-alert";

const imageURL =
  "https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 1px 1px 5px 5px #888888;
`;

const Image = styled("img")({
  width: 150,
  padding: 10,
  margin: "auto",
  display: "flex",
});

const Wrapper = styled(Box)`
  display: flex;
  padding: 25px 35px;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;'
  }
`;

const LoginButton = styled(Button)`
  background-color: #fb641b;
  text-transform: none;
  color: #fff;
  height: 48px;
  border-radius: 1px;
`;

const SigninButton = styled(Button)`
  background-color: #fff;
  text-transform: none;
  color: #2874f0;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Login = (props) => {
  //  save the state of account
  const [curstate, togglestate] = useState("signup");

  const alert = useAlert();

  //    sign up credential
  const accountdetails = {
    email: "",
    user: "",
    pass: "",
  };

  const logIndetail = {
    email: "",
    pass: "",
  };

  const [olddetails, newdetails] = useState(accountdetails);

  const [logindetail, newLogindetail] = useState(logIndetail);

  const changestate = () => {
    curstate === "login" ? togglestate("signup") : togglestate("login");
  };

  const getDetails = (e) => {
    // console.log(e.target.name, e.target.value);
    newdetails({ ...olddetails, [e.target.name]: e.target.value });
  };

  const saveUserDetail = async () => {
    try {
      const res = await signUpDetail(olddetails);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        props.setIsAuth(true);
        alert.show("Sign Up Successfull");
      } else {
        console.log(res);
        alert.show("ERROR", { type: "error" });
      }
    } catch (err) {
      alert.show("ERROR", { type: "error" });
    }
  };

  const getLoginDetails = (e) => {
    // console.log(e.target.value);
    newLogindetail({ ...logindetail, [e.target.name]: e.target.value });
  };

  const userLogin = async () => {
    // console.log(logindetail);
    const res = await userLoginDetails(logindetail);
    try {
      if (res.status === 202) {
        localStorage.setItem("token", res.data.token);
        props.setIsAuth(true);
        alert.show("Login Successful");
      } else {
        // console.log("This is error");
        alert.show("ERROR", { type: "error" });
      }
    } catch (err) {
      console.log("This is error");
      alert.show("ERROR", { type: "error" });
    }

    // console.log(res.data.token);
    // alert(response.data.msg);
    // console.log(res.response.data.msg);
  };

  return (
    <>
      <Component>
        <Image src={imageURL} alt="image" />
        {curstate === "login" ? (
          <Wrapper>
            <TextField
              variant="standard"
              value={logindetail.email}
              label="Email/UserId"
              name="email"
              onChange={(e) => getLoginDetails(e)}
            />
            <TextField
              value={logindetail.pass}
              variant="standard"
              label="Password"
              name="pass"
              onChange={(e) => getLoginDetails(e)}
            />
            <LoginButton variant="contained" onClick={userLogin}>
              Login{" "}
            </LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <SigninButton variant="text" onClick={changestate}>
              Create New Account{" "}
            </SigninButton>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              value={olddetails.email}
              variant="standard"
              label="Email"
              onChange={(e) => getDetails(e)}
              name="email"
            />
            <TextField
              value={olddetails.user}
              variant="standard"
              label="Username"
              onChange={(e) => getDetails(e)}
              name="user"
            />
            <TextField
              value={olddetails.pass}
              variant="standard"
              label="Password"
              onChange={(e) => getDetails(e)}
              name="pass"
            />
            <SigninButton variant="text" onClick={saveUserDetail}>
              SignUp{" "}
            </SigninButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <LoginButton variant="contained" onClick={changestate}>
              Login
            </LoginButton>
          </Wrapper>
        )}
      </Component>
    </>
  );
};

export default Login;

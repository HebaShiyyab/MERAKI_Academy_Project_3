import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(setToken) {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [loginError, setLoginError] = useState("");

  const loginUser = ( token) => {
    axios
      .post(`http://localhost:5000/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if(res.status === 200 ){
          setToken(res.data.token);
        history.push("/Dashboard");
        }else{
          <Login setToken={setToken} />
        }


        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="Login">
      <input
        type="text"
        placeholder="email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Password here"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={loginUser}>Login </button>
    </div>
  );
}

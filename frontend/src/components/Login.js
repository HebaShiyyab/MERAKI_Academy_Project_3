import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = ()=>{
      axios.post(`http://localhost:5000/login`,{
          email : email,
          password:password
      }).then((res)=>{
        console.log(res.data);
        
       
      }).catch((error)=>{
          console.log(error);
      })
  }
  return (
    <div className ='Login'>
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

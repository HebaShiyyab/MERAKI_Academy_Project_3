import React, { useState } from "react";
import axios from "axios";

export default function Register() {
  const [message, setMessage] = useState('')
  // const [newUser, setNewUser] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const postUser = () => {
    axios
      .post(`http://localhost:5000/users`, {
        firstName: firstName,
        lastName: lastName,
        age: age,
        country: country,
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setMessage("Error happened while register, please try again");
        } else {
          //    response.json("Error happened while register, please try again");
          setMessage("The user has been created successfully");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='register'>
      <input
        type="text"
        placeholder="firstName here "
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="lastName here "
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <input
        type="number"
        placeholder="age here"
        onChange={(e) => {
          setAge(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="country here "
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Email here"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password here "
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button onClick={postUser}>Register </button>
<div className="message">{message}</div>    </div>
  );
}

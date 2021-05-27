import React from "react";
import { Link } from "react-router-dom";


export default function Navigation() {
  return (
    <div className="Navigation" style= {{display:'flex' , gap: '16px'}}>
      <Link to="/login">Login</Link>
      <Link to="/Register">Register</Link>
    </div>
  );
}

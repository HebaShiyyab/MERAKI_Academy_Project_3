import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [getArticle, setGetArticle] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/articles`)
      .then((res) => {
        setGetArticle(res.data);
        // console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // return (
  //   <div className="Navigation" style= {{display:'flex' , gap: '16px'}}>
  //     <Link to="/Dashboard">Dashboard</Link>
  //     <Link to="/NewArticle">New Article</Link>
  //     {getArticle.map((elem,i)=>{
  //       return (<div> <p> {elem.title} </p>
  //         <p>{elem.description}</p> </div>);
  //   </div>
  // );
}
      {/* <button onClick={useEffect}>get All Article </button> */}

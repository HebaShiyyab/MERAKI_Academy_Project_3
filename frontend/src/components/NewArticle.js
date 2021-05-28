import React, { useState } from "react";
import axios from "axios";

export default function NewArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const Add = ()=>{
      axios
      .post(`http://localhost:5000/articles`,{
          title :title,
          description :description,
      })
      .then((res)=>{
console.log(res)
      }).catch((error)=>{
        console.log(error)

      })
  }
  return (
    <div className="NewArticle">
      <input
        type="text"
        placeholder="article title here"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text area"
        placeholder="article description here"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={Add}>Create New Article </button>

    </div>
  );
}

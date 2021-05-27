import React, { useState } from "react";

export default function NewArticle() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
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
      <button onClick={}>Create New Article </button>

    </div>
  );
}

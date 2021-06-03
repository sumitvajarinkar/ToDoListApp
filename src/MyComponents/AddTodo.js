import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };
  return (
    <div className="container my-3">
      <h3 className="text-center">Add a Todo 📜 </h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            <b>Todo Title</b>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="Enter the title here"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            <b>Todo Description</b>
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
            placeholder="Enter the description here"
          />
        </div>
        <button type="submit" className="btn btn-lg btn-primary">
          Add Todo ➕
        </button>
      </form>
    </div>
  );
};

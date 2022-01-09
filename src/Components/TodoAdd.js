import React, { useState } from "react";

export const TodoAdd = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = () => {};

  return (
    <div className="container my-3">
      <hr />
      <h3 className="text-center">Add New Item</h3>
      <hr />
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title"
            aria-describedby="title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Todo Description
          </label>
          <input type="text" value={desc} className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

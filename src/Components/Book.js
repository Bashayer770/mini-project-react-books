import React from "react";
import EditBook from "./EditBook";

export default function Book({ book }) {
  return (
    <div className="theList">
      <h2>{book.name}</h2>
      <img
        src={book.image}
        width="150px"
        style={{ marginLeft: "auto", marginRight: "auto", maxHeight: "200px" }}
      />
      <h3>{book.available}</h3>
      <EditBook book={book} />
    </div>
  );
}

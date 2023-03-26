import React from "react";
import EditBook from "./EditBook";

export default function Book({ book }) {
  return (
    <div>
      <h2>{book.name}</h2>
      <img src={book.image} />
      <h3>{book.available}</h3>
      <EditBook book={book} />
    </div>
  );
}

import React from "react";
import { List } from "../utils/Api/Books";
import { useQuery } from "@tanstack/react-query";
import Book from "./Book";
import { useNavigate } from "react-router-dom";

export default function BookList() {
  const res = useQuery(["books"], () => List());
  console.log(res);

  const res2 = res.data?.data.map((x) => <Book book={x} />);

  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/BookList/Add")}>Add Book</button>
      <div>BookList</div>
      <div>{res2}</div>
    </>
  );
}

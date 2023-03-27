import React from "react";
import { getBook, getOne, List } from "../utils/Api/Books";
import { useQuery } from "@tanstack/react-query";
import Book from "./Book";
import { useNavigate } from "react-router-dom";
import { useParams, Navigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

export default function BookList() {
  const res = useQuery(["books"], () => List());
  console.log(res);

  const res2 = res.data?.data.map((x) => <Book book={x} />);

  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <div className="forAddBook">
        <button className="AddButton" onClick={() => navigate("/BookList/Add")}>
          Add Book
        </button>
      </div>
      <div className="forBooklist">
        <div>BookList</div>
      </div>

      <div className="theBookList">{res2}</div>
      {/* <div className="bookListBody"></div> */}
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <NavLink to={"/"}>
        <div>BOOK-LET</div>
      </NavLink>

      <NavLink to={"/"}>
        <div>Home</div>
      </NavLink>

      <NavLink to={"/BookList"}>
        <div>BookList</div>
      </NavLink>
    </>
  );
}

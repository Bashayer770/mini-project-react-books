import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getBook } from "../utils/Api/Books";

export function BookDetails(book) {
  const { id } = useParams();
  const getDetail = useQuery(["book"], () => getBook(id));
  console.log(getDetail);
  const bookdata = getDetail.data?.data;
  console.log(bookdata);
  return (
    <>
      <div>BookDetails</div>
      <h2>{bookdata.name}</h2>
      <img src={bookdata.image}></img>
      <h5> available: {bookdata.available}</h5>
      <h6> details: {bookdata.details}</h6>
    </>
  );
}

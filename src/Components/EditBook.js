import React from "react";
import { Adjust } from "../utils/Api/Books";
import { Delete } from "../utils/Api/Books";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export default function EditBook({ book }) {
  const queryClient = useQueryClient();

  const deleteBook = useMutation(() => Delete(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const adjustBook = useMutation(() => Adjust(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });
  const navigate = useNavigate();

  return (
    <>
      <div>EditBook</div>;<button onClick={deleteBook.mutate}>Delete</button>
      <button onClick={adjustBook.mutate}>available</button>
      <button
        onClick={() => {
          navigate(`/BookDetails/${book.id}`);
        }}
      >
        Details
      </button>
    </>
  );
}

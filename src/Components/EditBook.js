import React from "react";
import { Adjust } from "../utils/Api/Books";
import { Delete } from "../utils/Api/Books";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function EditBook({ book }) {
  const queryClient = useQueryClient();

  const deleteBook = useMutation(() => Delete(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const adjustBook = useMutation(() => Adjust(book.id), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  return (
    <>
      <div>EditBook</div>;<button onClick={deleteBook.mutate}>Delete</button>
      <button onClick={adjustBook.mutate}>available</button>
    </>
  );
}

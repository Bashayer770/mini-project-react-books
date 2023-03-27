import React from "react";
import { Field, Formik, Form } from "formik";
import { Add } from "../utils/Api/Books";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";

export default function AddBook() {
  const queryClient = useQueryClient();
  const AddedBook = useMutation((values) => Add(values), {
    onSuccess: () => queryClient.invalidateQueries(["books"]),
  });

  const theValues = {
    name: "",
    details: "",
    image: "",
    available: 0,
  };
  const navigate = useNavigate();

  const submit = (values, { reset }) => {
    AddedBook.mutate(values);
    console.log(values);
    navigate("/BookList");
  };

  return (
    <div
      style={{
        paddingTop: "20%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="TheFormPage"> Add Book </div>
      <div className="container">
        <Formik initialValues={theValues} onSubmit={submit}>
          <Form>
            <h5 className="TheValues">Name</h5>
            <div className="TheInput">
              <Field as="input" name="name" type="text"></Field>
            </div>
            <h5 className="TheValues">Details</h5>
            <div className="TheInput">
              <Field as="input" name="details" type="text"></Field>
            </div>

            <h5 className="TheValues">Image</h5>
            <div className="TheInput">
              <Field as="input" name="image" type="text"></Field>
            </div>
            <div>
              <button className="thebuttons" type="submit">
                Submit
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

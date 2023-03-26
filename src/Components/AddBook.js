import React from "react";
import { Field, Formik, Form } from "formik";
import { Add } from "../utils/Api/Books";
import { useNavigate } from "react-router-dom";

export default function AddBook() {
  const theValues = {
    name: "",
    details: "",
    image: "",
    available: 0,
  };
  const navigate = useNavigate();

  const submit = (values, { reset }) => {
    Add(values);
    console.log(values);

    navigate("/BookList");
  };

  return (
    <Formik initialValues={theValues} onSubmit={submit}>
      <Form>
        <Field as="input" name="name" type="text"></Field>
        <Field as="input" name="details" type="text"></Field>
        <Field as="input" name="image" type="text"></Field>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
      </Form>
    </Formik>
  );
}

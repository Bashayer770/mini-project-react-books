import axios from "axios";

export function List() {
  return axios.get("https://mini-project-react-books.herokuapp.com/books");
}

export function Adjust(id) {
  return axios.put(
    `https://mini-project-react-books.herokuapp.com/book/${id}`,
    { available: true }
  );
}

export function Add(x) {
  return axios.post(`https://mini-project-react-books.herokuapp.com/books`, x);
}

export function Delete(id) {
  return axios.delete(
    `https://mini-project-react-books.herokuapp.com/books/${id}`
  );
}

export function getBook(id) {
  return axios.get(`https://mini-project-react-books.herokuapp.com/book/${id}`);
}
//function

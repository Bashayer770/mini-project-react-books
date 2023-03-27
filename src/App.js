import logo from "./logo.svg";
import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookList from "./Components/BookList";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";
import { BookDetails } from "./Components/BookDetails";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="homeHeaderMain">
        <div className="logoName">
          <NavLink to={"/"}>
            <div>BOOK-LET</div>
          </NavLink>
          <div className="navlist">
            <NavLink to={"/"}>
              <div>Home</div>
            </NavLink>

            <NavLink to={"/BookList"}>
              <div>BookList</div>
            </NavLink>
          </div>
        </div>
      </div>
      <div className="homeHeader2"></div>
      <div className="homeHeader3"></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={<BookList />} />
        <Route path="/BookList/Add" element={<AddBook />} />
        <Route path="/BookDetails/:id" element={<BookDetails />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

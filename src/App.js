import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BookList from "./Components/BookList";
import Home from "./Components/Home";
import AddBook from "./Components/AddBook";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BookList" element={<BookList />} />
        <Route path="/BookList/Add" element={<AddBook />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;

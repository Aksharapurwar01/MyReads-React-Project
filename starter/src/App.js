import React, { useContext } from "react";
import SearchBooks from "./components/SearchBooks/Search";
import BookShelves from "./components/Book Shelves/BookShelves";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<BookShelves />}></Route>
      </Routes>
      <Routes>
        <Route path="/search" element={<SearchBooks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

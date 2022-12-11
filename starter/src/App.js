import React, { useContext } from "react";
import SearchBooks from "./components/SearchBooks/Search";
import BookShelves from "./components/Book Shelves/BookShelves";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from './BooksAPI';
import { useState, useEffect } from 'react';

export default function App() {

  const [allBooks, setBooks] = useState([]);

  useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
      console.log(res,"all")
			setBooks(res);
		}
    getBooks();
    console.log(allBooks,"allBooks")
	}, []);




  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<BookShelves books={allBooks} />}></Route>
      </Routes>
      <Routes>
        <Route path="/search" element={<SearchBooks />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

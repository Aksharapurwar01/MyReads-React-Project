import React, { useContext } from "react";
import SearchBooks from "./components/SearchBooks/Search";
import BookShelves from "./components/Book Shelves/BookShelves";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import { useState, useEffect } from "react";

export default function App() {
  const [allBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  const updateBookShelf = (book, updatedShelf) => {
    const updateBook = () => {
      const id = allBooks.findIndex((bookShelf) => {
        return bookShelf.id === book.id;
      });
      if (id >= 0) {
        let updatedBooksShelf = [...allBooks];
        updatedBooksShelf[id].shelf = updatedShelf;
        setBooks(updatedBooksShelf);
      }
    };
    updateBook();
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <BookShelves
              books={allBooks}
              updateBookShelf={(book, updatedShelf) =>
                updateBookShelf(book, updatedShelf)
              }
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/search"
          element={
            <SearchBooks
              books={allBooks}
              updateBookShelf={(book, updatedShelf) =>
                updateBookShelf(book, updatedShelf)
              }
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

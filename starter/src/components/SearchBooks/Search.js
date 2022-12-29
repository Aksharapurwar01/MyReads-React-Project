import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";
import Book from "../Book/Book";
import { PropTypes } from "prop-types";

export default function Search({ books, updateBookShelf }) {
  const [search, setSearch] = useState("");
  const [searchedBook, setSearchedBook] = useState([]);

  const updateBookCategory = (book, newShelf) => {
    const updateBook = () => {
      const id = searchedBook.findIndex((searchedBook) => {
        return searchedBook.id === book.id;
      });
      if (id >= 0) {
        let updatedBooks = [...searchedBook];
        updatedBooks[id].shelf = newShelf;
        updateBookShelf(book, newShelf);
        setSearchedBook(updatedBooks);
      }
    };
    updateBook();
  };

  useEffect(() => {
    const searchBooks = () => {
      if (search.trim().length > 0) {
        BooksAPI.search(search, 100)
          .then((data) => {
            if (data.error) {
              setSearchedBook([]);
            } else {
              if (data.length) {
                data.forEach((book) => {
                  books.forEach((shelfBook) => {
                    if (book.id === shelfBook.id) {
                      book["shelf"] = shelfBook.shelf;
                    }
                  });
                });
                setSearchedBook(data);
              } else {
                setSearchedBook([]);
              }
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setSearchedBook([]);
      }
    };
    searchBooks();
  }, [search, books]);

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchedBook.map((book) => {
            return (
              <Book
                key={book.id}
                book={book}
                updateBookShelf={(book, updatedShelf) =>
                  updateBookCategory(book, updatedShelf)
                }
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

Search.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

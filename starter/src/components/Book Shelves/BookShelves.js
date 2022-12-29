import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import { PropTypes } from "prop-types";

export default function BookShelves({ books, updateBookShelf }) {
  const Bookshelves = [
    { name: "Currently Reading", value: "currentlyReading" },
    { name: "Want To Read", value: "wantToRead" },
    { name: "Read", value: "read" },
  ];

  return (
    <>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {Bookshelves.map((shelf) => {
              return (
                <BookShelf
                  key={shelf.value}
                  shelf={shelf}
                  books={books}
                  updateBookShelf={(book, updatedShelf) =>
                    updateBookShelf(book, updatedShelf)
                  }
                />
              );
            })}
          </div>
        </div>
        <Link to="/search" className="open-search">
          Add a book
        </Link>
      </div>
    </>
  );
}

BookShelves.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

import React from "react";
import Dropdown from "../Dropdown/Dropdown";
import * as BooksAPI from "../../BooksAPI";
import { PropTypes } from "prop-types";

export default function Book({ book, updateBookShelf }) {
  const updateShelf = (newShelf) => {
    const updateBookDetails = async () => {
      await BooksAPI.update(book, newShelf);
      updateBookShelf(book, newShelf);
    };
    updateBookDetails();
  };

  return (
    <div>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url("${
                  book && book.imageLinks && book.imageLinks.thumbnail
                }")`,
              }}
            ></div>
            <Dropdown
              booksCategory={book.shelf === undefined ? "none" : book.shelf}
              onChangeShelf={(newShelf) => updateShelf(newShelf)}
            />
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book && book.authors && book.authors.join(",")}
          </div>
        </div>
      </li>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

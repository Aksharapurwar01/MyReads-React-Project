import React from "react";
import Book from "../Book/Book";

export default function BookShelf({ shelf, books }) {

  const filterBooks = books.filter((book) => {
    return book.shelf === shelf.value;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          <ol className="books-grid">
            {filterBooks.map((book) => {
              return <Book key={book.id} book={book} />;
            })}
          </ol>
        </ol>
      </div>
    </div>
  );
}

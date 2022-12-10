import React from "react";

export default function BookShelf({ shelf }) {
  console.log(shelf, "shelf");
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid"></ol>
      </div>
    </div>
  );
}

import React from "react";
import Dropdown from "../Dropdown/Dropdown";

export default function Book({ book }) {
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
            <Dropdown/>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors.join(", ")}</div>
        </div>
      </li>
    </div>
  );
}

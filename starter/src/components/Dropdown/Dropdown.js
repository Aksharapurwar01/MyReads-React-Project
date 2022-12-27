import React from "react";

export default function Dropdown({ booksCategory, onChangeShelf }) {
  const changeShelf = (newShelf) => {
    if (onChangeShelf) {
      console.log(newShelf, "newShelf");
      onChangeShelf(newShelf);
    }
  };

  return (
    <div className="book-shelf-changer">
      <select
        value={booksCategory}
        onChange={(event) => {
          changeShelf(event.target.value);
        }}
      >
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

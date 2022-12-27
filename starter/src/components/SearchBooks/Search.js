import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from "../../BooksAPI";
import Book from "../Book/Book";

export default function Search({ books, updateBookShelf }) {
  const [search, setsearch] = useState('');
    const [searchedBook, setsearchedBook] = useState([])
    const searchBooks = (value) => {
        setsearch(value);
        if(value.length>0){
            BooksAPI.search(value).then((data)=>{
                if(data.error){
                    setsearchedBook([]);
                }else{
                    setsearchedBook(data)
                }
            }).catch((error)=>{
                console.log("error",error)
            })
        }else{
            setsearchedBook([])
        }
    }



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
                onChange={(e)=>searchBooks(e.target.value)}
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
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
}

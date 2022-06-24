import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import { Book } from "../components/Book";

export const Search = ({ books }) => {
  const inputRef = useRef();
  const [, setNewQuery] = useState({});
  const [booksList, setBooksList] = useState([]);

  const handleSearchBooks = async (query) => {
    const newQuery = inputRef.current.value;
    setNewQuery({ newQuery });

    if (!newQuery) {
      setBooksList([]);
    } else {
      const res = await search(newQuery);
      if (res.error) {
        setBooksList([]);
      } else {
        setBooksList(res.filter((book) => book.title.includes(newQuery)));
      }
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/">
          <button className="close-search"></button>
        </Link>
        <div className="search-books-input-wrapper">
          <input
            ref={inputRef}
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => handleSearchBooks(e)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksList.length > 0 ? (
            booksList.map((book, index) => <Book key={index} details={book} />)
          ) : (
            <h3>No books found</h3>
          )}
        </ol>
      </div>
    </div>
  );
}

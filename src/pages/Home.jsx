import { Shelf } from "../components/Shelf";
import { Link } from "react-router-dom"

export const Home = ({ books }) =>
(
  <div className="Home">
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
    </div>
    <div className="list-books-content">
      <Shelf
        books={books.filter((book) => book.shelf === "currentlyReading")}
        title="Currently Reading"
      />
      <Shelf
        books={books.filter((book) => book.shelf === "wantToRead")}
        title="Want To Read"
      />
      <Shelf
        books={books.filter((book) => book.shelf === "read")}
        title="Read"
      />
    </div>
    <div className="open-search">
      <Link to="/search">
        <button></button>
      </Link>
    </div>
  </div>
);
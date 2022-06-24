import { Book } from "./Book";

export const Shelf = () => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">Currently Reading</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        <Book />
        <Book />
      </ol>
    </div>
  </div>
);
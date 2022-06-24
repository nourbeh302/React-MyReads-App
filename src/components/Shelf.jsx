import { Book } from "./Book";

export const Shelf = ({ books, title }) => (
  <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>
    <div className="bookshelf-books">
      <ol className="books-grid">
        {books.map((book, index) => (
          <Book key={index} details={book} />
        ))}
      </ol>
    </div>
  </div>
);
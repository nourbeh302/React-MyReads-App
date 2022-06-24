import { update } from "../BooksAPI";

export const Book = ({ details }) => {
  const handleUpdateShelf = async (selectedShelf) => {
    const newShelf = selectedShelf.target.value;
    const book = details;
    await update(book, newShelf);
  };

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${details.imageLinks ? details.imageLinks.thumbnail : ""})`
            }}
          />
          <div className="book-shelf-changer">
            <select
              onChange={(e) => handleUpdateShelf(e)}
              value={details.shelf ? details.shelf : "none"}
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
        </div>
        <div className="book-title">{details.title}</div>
        <div className="book-authors">
          {details.authors ? details.authors.join() : "Untitled"}
        </div>
      </div>
    </li>
  );
}
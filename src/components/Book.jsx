export const Book = () =>
(
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url("")`
          }}
        />
        <div className="book-shelf-changer">
          <select
            value="none"
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
      <div className="book-title">The Great Gatsby</div>
      <div className="book-authors">F. Scott Fitzgerald</div>
    </div>
  </li>
)
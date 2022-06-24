import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { getAll } from "./BooksAPI";
import "./App.css";

export default function App() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    getAll().then((data) => setBooks(data));
    return () => {};
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home books={books} />} />
          <Route exact path="/search" element={<Search books={books} />} />
        </Routes>
      </div>
    </Router>
  );
}
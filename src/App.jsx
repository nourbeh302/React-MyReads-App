import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => <h1>Home</h1>
const Search = () => <h1>Search</h1>
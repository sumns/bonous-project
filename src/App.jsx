import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Task from "./components/Task";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function App() {
  function handleLocalStorage() {
    const data = window.confirm("Sure you want to remove");
    if (data) {
      localStorage.removeItem("data");
      alert("remove data succcessfull");
    }
  }
  return (
    <div className="App">
      <Router>
        <div className="navBar">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/task">Task</Link>
              </li>
            </ul>
          </nav>
          <hr />
          <Routes>
            <Route
              path="/"
              element={<Home handleLocalStorage={handleLocalStorage} />}
            />
            <Route path="/contact" element={<Contact />} />
            <Route path="/task" element={<Task />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

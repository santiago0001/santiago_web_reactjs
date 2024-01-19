import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

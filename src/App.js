import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

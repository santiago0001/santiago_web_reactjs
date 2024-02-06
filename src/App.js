import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { Home } from "./components/Home/Home";
import { ThemeProvider } from "@mui/material";
import { theme } from "./components/theme";
import { Studies } from "./components/Studies/Studies";
import { Experience } from "./components/Experience/Experience";
import { News } from "./components/News/News";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/estudios" element={<Studies />} />
            <Route path="/experiencia" element={<Experience />} />
            <Route path="/novedades" element={<News />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

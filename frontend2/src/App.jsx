import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basic from "./Components/Login";
import { NavbarSimple } from "./Components/Navbar.jsx";
import { FooterWithLogo } from "./Components/Footer.jsx";
import ContentSection16 from "./Components/Article.jsx";
import { HomePage } from "./Pages/HomePage.jsx";

export default function App() {
  return (
    <Router>
      <NavbarSimple />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={<Basic />} />
        <Route path="/articles" element={<ContentSection16 />} />
      </Routes>
      <FooterWithLogo />
    </Router>
  );
}

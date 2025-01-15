import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Components/Navbar.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes></Routes>
    </Router>
  );
}

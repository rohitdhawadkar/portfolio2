import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage.jsx";

import Navbar from "./Components/Navbar.jsx";
import ProfilePage from "./Pages/ProfilePage.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

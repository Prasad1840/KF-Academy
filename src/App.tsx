import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Onboarding from "./pages/Onboarding";
import Learnmore from "./pages/Learnmore";
import Training from "./pages/Training";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </Router>
  );
};

export default App;

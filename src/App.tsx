import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Learnmore from "./components/Learnmore";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/learnmore" element={<Learnmore />} />
      </Routes>
    </Router>
  );
};

export default App;

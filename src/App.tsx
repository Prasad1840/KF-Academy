
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Onboarding from "./pages/Onboarding";
import Learnmore from "./pages/Learnmore";
import ReactTraining from "./pages/training-pages/ReactTraining";
import AngularTraining from "./pages/training-pages/AngularTraining";
import TypescriptTraining from "./pages/training-pages/TypescriptTraining";

const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/training/react" element={<ReactTraining />} />
        <Route path="/training/angular" element={<AngularTraining />} />
        <Route path="/training/type-script" element={<TypescriptTraining />} />
      </Routes>
    </Router>
  );
};

export default App;

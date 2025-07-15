
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Onboarding from "./pages/Onboarding";
import Learnmore from "./pages/Learnmore";
import Training from "./pages/Training";
import ReactTraining from "./pages/training-pages/ReactTraining";
import AngularTraining from "./pages/training-pages/AngularTraining";
import TypescriptTraining from "./pages/training-pages/TypescriptTraining";
import ZustandTraining from "./pages/training-pages/ZustandTraining";
import FastApiTraining from "./pages/training-pages/FastApiTraining";
import CICDFastApiTraining from "./pages/training-pages/CICDFastApiTraining";

import { SkillPage } from "./pages/trainingLogic";
import PodShowcase from "./components/pod-specific/PodShowcase";
const App: React.FC = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learnmore" element={<Learnmore />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/training" element={<Training />} />
        <Route path="/podshowcase" element={<PodShowcase />} />
        <Route path="/training/react" element={<ReactTraining />} />
        <Route path="/training/angular" element={<AngularTraining />} />
        <Route path="/training/typescript" element={<TypescriptTraining />} />
        <Route path="/training/zustand" element={<ZustandTraining />} />
        <Route path="/training/fastapi" element={<FastApiTraining />} />
        <Route path="/training/cicd-fastapi" element={<CICDFastApiTraining />} />
      </Routes>
    </Router>
  );
};

export default App;

import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { onboardingData } from "./Onboarding";
import { motion, AnimatePresence } from "framer-motion";

interface LocationState {
  phaseIndex: number;
  stepIndex: number;
}

const Learnmore: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;
  const { phaseIndex, stepIndex } = state || { phaseIndex: 0, stepIndex: 0 };

  // Track active step per phase
  const [activeSteps, setActiveSteps] = useState<{ [key: number]: number | null }>(
    { [phaseIndex]: stepIndex }
  );

  const handleStepClick = (pIndex: number, sIndex: number) => {
    setActiveSteps((prev) => ({
      ...prev,
      [pIndex]: prev[pIndex] === sIndex ? null : sIndex, // Toggle this step
    }));
  };

  return (
    <div className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Header Section with Background Image */}
<div className="relative h-[60vh] bg-black overflow-hidden">
  {/* Background Image */}
  <motion.div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage: `url('https://plus.unsplash.com/premium_photo-1672858437985-2b0e0efe927d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxzdGVwc3xlbnwwfHwwfHx8MA%3D%3D')`,
    }}
  />
  {/* Overlay for contrast */}
  <div className="absolute inset-0 bg-black opacity-30"></div>

  {/* Page Heading and Description */}
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-4">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        fontFamily: "Gotham Medium, Gotham A, sans-serif",
        background: "linear-gradient(to right, #16a34a, #065f46)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
      className="text-5xl font-semibold italic tracking-wide text-center"
    >
      STEP DETAILS
    </motion.h1>
           <p className="mt-4 text-gray-200 text-lg max-w-2xl">
               Dive deeper into each onboarding phase to explore detailed steps.
          </p>
        </div>
      </div>

      {/* Steps Content */}
      <div className="p-6 max-w-4xl mx-auto">
        {onboardingData.map((phase, pIndex) => (
          <div key={pIndex} className="mb-10">
            {/* Phase Title */}
            <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
              {phase.phase}
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-6">
              {phase.steps.map((step, sIndex) => {
                const isActive = activeSteps[pIndex] === sIndex;

                return (
                  <motion.div
                    key={sIndex}
                    layout
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, type: "spring" }}
                    className={`relative border rounded-lg shadow-md cursor-pointer group ${
                      isActive
                        ? "bg-green-100 border-green-500"
                        : "bg-white border-gray-300"
                    }`}
                    onClick={() => handleStepClick(pIndex, sIndex)}
                  >
                    {/* Hover Background Image */}
                    <div
                      className="absolute h-full inset-0 bg-cover bg-center opacity-0 group-hover:opacity-40 transition duration-500 ease-in-out rounded-lg"
                      style={{
                        backgroundImage: `url(${step.image})`,
                      }}
                    ></div>

                    {/* Slight overlay for text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-30 transition duration-500 rounded-lg"></div>

                    {/* Step Number Badge */}
                    <div className="absolute top-3 left-3 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md z-10">
                      {sIndex + 1}
                    </div>

                    {/* Step Title */}
                    <div className="relative pl-14 pr-4 py-4 z-10">
                      <h3 className="text-lg font-bold text-green-800 group-hover:text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Expanded Details */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key="details"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="relative mt-3 p-3 text-sm text-gray-700 leading-relaxed bg-white bg-opacity-90 rounded"
                        >
                          <div
                            className="prose max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: step.details,
                            }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learnmore;

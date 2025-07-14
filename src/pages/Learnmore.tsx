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
  const [activeSteps, setActiveSteps] = useState<{ [key: number]: number | null }>({
    [phaseIndex]: stepIndex,
  });

  const handleStepClick = (pIndex: number, sIndex: number) => {
    setActiveSteps((prev) => ({
      ...prev,
      [pIndex]: prev[pIndex] === sIndex ? null : sIndex, // Toggle this step
    }));
  };

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      {/* Page Heading */}
<div className="text-center mb-8">
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
    className="text-5xl font-semibold italic tracking-wide transition duration-700 ease-in-out hover:scale-105 hover:drop-shadow-[0_4px_20px_rgba(22,163,74,0.5)]"
  >
    STEP DETAILS
  </motion.h1>
</div>



      {onboardingData.map((phase, pIndex) => (
        <div key={pIndex} className="mb-10">
          {/* Phase Title */}
          <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
            {phase.phase}
          </h2>

          {/* Column Layout for Steps */}
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

                  {/* Step Title (add extra padding-left so badge doesn’t overlap) */}
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
  );
};

export default Learnmore;

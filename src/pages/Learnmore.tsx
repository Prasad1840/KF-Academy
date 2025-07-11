import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { onboardingData } from "./Onboarding";

interface LocationState {
  phaseIndex: number;
  stepIndex: number;
}

const Learnmore: React.FC = () => {
  const location = useLocation();
  const state = location.state as LocationState; 
  const { phaseIndex, stepIndex } = state || { phaseIndex: 0, stepIndex: 0 };

  // Fix ref typing
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll to selected step on mount
  useEffect(() => {
    if (stepRefs.current[stepIndex]) {
      stepRefs.current[stepIndex]?.scrollIntoView({ behavior: "smooth" });
    }
  }, [stepIndex]);

  return (
    <div className="p-6 bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-green-800 text-center">
        Step Details
      </h1>

      {onboardingData.map((phase, pIndex) => (
        <div key={pIndex} className="mb-10">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            {phase.phase}
          </h2>

          {phase.steps.map((step, sIndex) => {
            const isActive = pIndex === phaseIndex && sIndex === stepIndex;

            return (
              <div
                key={sIndex}
                ref={(el) => {
                  stepRefs.current[sIndex] = el; 
                }}
                className={`p-4 my-4 border rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-green-100 border-green-500 shadow-md"
                    : "bg-white border-gray-300"
                }`}
              >
                <h3 className="text-xl font-semibold text-green-800">
                  {step.title}
                </h3>
                <p className="text-gray-700 mt-2 whitespace-pre-line">
                  {step.details}
                </p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default Learnmore;

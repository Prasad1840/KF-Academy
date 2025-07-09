import React from "react";

const Onboarding: React.FC = () => {
  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://sibelco.getbynder.com/m/5f7bb5a8955a535b/large-Sib_EUR_BE_HQ_016.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Centered Text */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-extrabold text-white drop-shadow-lg">
          Onboarding
        </h1>
      </div>
    </div>
  );
};

export default Onboarding;

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import FadeInSection from "../components/FadeInSection";
import About from '../components/About';
import Trainings from '../components/Trainings';
import Pod1Details from '../components/pod-specific/POD-1';
import Pod5Layout from '../components/pod-specific/POD-5';

const DiagonalStripe = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute top-1/2 right-0 w-[150%] h-[300%] bg-black opacity-30 rotate-[45deg] z-20 pointer-events-none origin-top-right"
    />
  );
};

const Home: React.FC = () => {
  return (
    <div>
    <FadeInSection>
    <div className="relative h-screen overflow-hidden">
      {/* Background image with zoom animation */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://sibelco.getbynder.com/m/5f7bb5a8955a535b/large-Sib_EUR_BE_HQ_016.jpg')",
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>

      {/* Diagonal animated stripe */}
      <DiagonalStripe />

      {/* Navbar */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="relative z-20 flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10 min-h-screen">
        <div>
          <h2 className="text-4xl text-gray-200">Welcome to</h2><br />
          <h1 className="text-9xl font-bold tracking-tight opacity-80">
            <span className="inline-block skew-x-[-10deg] text-[#05C690]">KF Academy</span>
          </h1>
          <br />
          <div className="max-w-xl text-white">
          <p className="text-1xl mt-3 leading-relaxed text-gray-200">
            Step into your new role with confidence. Explore your team, discover essential
            resources, and connect with the people who'll support your journey. Everything
            you need for a smooth start is right here – let’s make your first days inspiring.
          </p>
          </div>
        </div>
      </div>
    </div>
    </FadeInSection>

    <About />
      <Trainings />
      <Pod1Details />
      <Pod5Layout/>
      </div>
  );

export default Home;

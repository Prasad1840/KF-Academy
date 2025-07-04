import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 shadow-md">
        <ul className="flex gap-6 text-sm font-medium text-gray-800">
          <li><Link to="#">Onboarding Guide</Link></li>
          <li><Link to="#">Project & Structure</Link></li>
          <li><Link to="#">Trainings</Link></li>
          <li><Link to="#">Contacts</Link></li>
          <li className="relative group cursor-pointer">
            <span>Resources ▾</span>
            {/* Dropdown Placeholder */}
            {/* <ul className="absolute hidden group-hover:block">...</ul> */}
          </li>
        </ul>
        <img src="/assets/hoonartek-logo.png" alt="Logo" className="h-6" />
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
        {/* Left Text Section */}
        <div className="max-w-xl">
          <h2 className="text-lg text-gray-600">Welcome to</h2>
          <h1 className="text-5xl font-bold text-black mt-2">KF Academy</h1>
          <p className="text-gray-600 m

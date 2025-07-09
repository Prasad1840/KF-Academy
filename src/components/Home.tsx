import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";


const Home: React.FC = () => {
     
       

    return (
        <>
          
            <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-16 gap-10">
                {/* Left Side Text Content */}
                <div className="max-w-xl">
                    <h2 className="text-lg text-gray-600">Welcome to</h2>
                    <h1 className="text-5xl font-bold text-black mt-2">KF Academy</h1>
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        Step into your new role with confidence. Explore your team, discover essential resources, and connect with the people who'll support your journey. Everything you need for a smooth start is right here let’s make your first days inspiring.
                    </p>
                    <div className="mt-8 flex gap-4">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition">
                            Begin
                        </button>
                        <button className="border border-gray-400 text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-100 transition">
                            Team
                        </button>
                    </div>
                </div>
                {/* Right Side Images */}
                <div className="grid grid-cols-2 gap-4">
                    <img
                        src="/assets/Working-2.jpg"
                        alt="People meeting"
                        className="rounded-xl object-cover w-full h-70"
                    />
                    <img
                        src="/assets/working-people.jpg"
                        alt="Team working"
                        className="rounded-xl object-cover w-full h-70"
                    />
                    <img
                        src="/assets/working-people.jpg"
                        alt="Planning session"
                        className="rounded-xl object-cover w-full h-48 col-span-2"
                    />
                </div>
            </div>
        </>
    );
};

export default Home;

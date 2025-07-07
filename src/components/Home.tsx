import React from "react";
import { Link } from "react-router-dom";


const Home: React.FC = () => {
    return (

        
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

        <div>
            <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-70 py-2 px-6 flex justify-between items-center">
                 <ul className="flex space-x-6 text-base font-medium justify-center w-2/4">
    
                    <li>Onboarding Guide</li>
                    <li>Project & Structure</li>
                    <li>Trainings</li>
                    <li>Contacts</li>
                    <li className="relative group cursor-pointer">
                      Resources ▾
                    </li>

                </ul>

                <div className="flex justify-end">
                  <img 
                  src="/assets/MicrosoftTeams-image(15).png"
                  alt="Hoonartek Logo"
                  className="h-10 w-auto"
                  ></img>

                </div>
            </nav>
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
    );
};

export default Home;

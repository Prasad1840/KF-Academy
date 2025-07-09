import { useState, useRef, useEffect } from 'react';
import Onboarding from './Onboarding';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  // ✅ Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="absolute top-0 left-0 w-full bg-white bg-opacity-70 py-2 px-6 flex items-center">
      {/* Left Spacer */}
      <div className="w-1/4"></div>

      {/* Center - Nav Links */}
      <ul className="flex space-x-6 text-base font-medium justify-center w-2/4 relative">
        <li className="group relative cursor-pointer px-2"  >
            <Link to="/onboarding" >Onboarding</Link>
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
        </li>

        <li className="group relative cursor-pointer px-2">
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            Project & Structure
        </li>
        
        <li className="group relative cursor-pointer px-2">
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            Trainings
        </li>

        <li className="group relative cursor-pointer px-2">
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            Contact
        </li>

        
        <li className="group relative cursor-pointer px-2">
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transition-all duration-300 ease-in-out transform -translate-x-1/2 group-hover:w-full"></span>
            About
        </li>

        {/* Resources Dropdown */}
        <li
          className="relative cursor-pointer select-none"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
            FAQ's▾
          <ul
            className={`absolute left-0 mt-2 flex flex-col bg-white shadow-md rounded-md p-2 z-10 min-w-[160px] transform transition-all duration-200 ease-in-out origin-top ${
              showDropdown ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Glossary</li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Guides</li>
          </ul>
        </li>
      </ul>

      {/* Right - Logo */}
      <div className="w-1/4 flex justify-end">
        <img
          src="/assets/MicrosoftTeams-image (15).png"
          alt="Hoonartek Logo"
          className="h-7 w-auto"
        />
      </div>
    </nav>
  );
}

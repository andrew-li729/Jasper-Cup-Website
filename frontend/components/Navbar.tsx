// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };


  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <img src="/jasper.png" alt="Jasper Cup" className="h-10 mr-2" />
          <div className="text-xl font-bold mt-2">Jasper Cup</div>
        </div>
        <ul 
          className={`hidden md:flex space-x-6 font-medium  ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          {/* Dropdown for About */}
          <li className="relative group">
            <button className="hover:text-yellow-400 flex items-center ">
              Season
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-5 w-21 bg-gray-800 text-white shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ul className="space-y-2 text-left">
                <li>
                  <Link href="#seasonoption" className="hover:text-yellow-400">
                    Season1
                  </Link>
                </li>
                <li>
                  <Link href="#seasonoption" className="hover:text-yellow-400">
                    Season2
                  </Link>
                </li>
                <li>
                  <Link href="seasonoption" className="hover:text-yellow-400">
                    Season3
                  </Link>
                </li>
              </ul>
            </div>
          </li>




          <li>
            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#shop" className="hover:text-yellow-400">
              Shop
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMobileMenu}
          >
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white mb-1"></span>
            <span className="block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? "block" : "hidden"
        } bg-gray-700 text-white py-4`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-yellow-400">
              About
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-yellow-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;

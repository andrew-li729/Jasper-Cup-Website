// components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };


  return (
    <header className="bg-neutral-800 text-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
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
            <Link href="/" className="hover:text-pink-300">
              Seasons
            </Link>
          </li>
            <button className="hover:text-pink-300 flex items-center ">
              Results
            </button>

            <button className="hover:text-pink-300 flex items-center ">
              Store
            </button>




          <li>
            <Link href="#contact" className="hover:text-pink-300">
              Twitch
            </Link>
          </li>
          <li>
            <Link href="#shop" className="hover:text-pink-300">
              About
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
              Current Season
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-yellow-400">
              Past Seasons
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-yellow-400">
              Shop
            </Link>
          </li>

        </ul>
      </div>
    </header>
  );
};

export default Navbar;

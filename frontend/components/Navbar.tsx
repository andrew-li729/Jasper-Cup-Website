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
          <Link href="/" className="text-xl font-bold mt-2 hover:text-pink-300">
              Jasper Cup
            </Link>

        </div>
        <ul 
          className={`hidden md:flex space-x-6 font-medium  ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <Link href="/" className="hover:text-pink-300">
              Home
            </Link>
          </li>
            <Link href="/results" className="hover:text-pink-300">
              Results
            </Link>

          
          <li>
          <Link
            href="https://www.twitch.tv/JasperCup"
            className="hover:text-pink-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </Link>

          </li>




          <li>
            <Link  href="/about"className="hover:text-pink-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/store" className="hover:text-pink-300">
              Store
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
        } bg-neutral-800 text-white py-4`}
      >
        <ul className="space-y-4 text-center">
          <li>
            <Link href="/" className="hover:text-pink-300">
              Home
            </Link>
          </li>
          <li>
            <Link href="/results" className="hover:text-pink-300">
              Results
            </Link>
          </li>
          <li>
            <Link
              href="https://www.twitch.tv/JasperCup"
              className="hover:text-pink-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitch
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-pink-300">
              About
            </Link>
          </li>

          <li>
            <Link href="/store" className="hover:text-pink-300">
              Store
            </Link>
          </li>


        </ul>
      </div>
    </header>
  );
};

export default Navbar;

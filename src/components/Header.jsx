// Header.js
import { Link } from "react-router-dom";
import logo from "../assets/logo rs.png";
import { useState } from "react"; // Add this import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full py-4 bg-white shadow-md sticky top-0">
      <nav className="container mx-auto flex justify-between items-center px-6">
        <div>
          <img src={logo} alt="logo" className="logo h-10 w-auto scale-100" />
        </div>
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link to="/" className="text-gray-600 font-bold hover:text-blue-600">
              Beranda
            </Link>
          </li>
          <li>
            <Link to="/tentang kami" className="text-gray-600 font-bold hover:text-blue-600">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-gray-600 font-bold hover:text-blue-600">
              Pelayanan
            </Link>
          </li>
          <li>
            <Link to="/jadwal dokter" className="text-gray-600 font-bold hover:text-blue-600">
              Jadwal Dokter 
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-600 font-bold hover:text-blue-600">
              Hubungi kami
            </Link>
          </li>
        </ul>
        <div className="md:hidden">
          {/* Tombol hamburger untuk mobile navigation */}
          <button
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
      {/* Menu navigasi untuk mobile */}
      {isMenuOpen && (
        <ul className="text-absolute md:hidden flex flex-col space-y-4 bg-white shadow-md p-4">
          <li>
            <Link
              to="/"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Beranda 
            </Link>
          </li>
          <li>
            <Link
              to="/AboutUs"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Pelayanan Kami
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Jadwal Dokter
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Hubungi Kami
            </Link>
            
          </li>
        </ul>
      )}
    </header>
  );
};

export default Header;
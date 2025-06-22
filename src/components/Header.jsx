import { Link } from "react-router-dom";
import logo from "../assets/logo rs.png";
import { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Tambahkan ref untuk menu dan tombol hamburger
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu jika klik di luar menu/hamburger
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`w-full bg-transparent py-4 sticky top-0 z-50 transition-all backdrop-filter ${isScrolled ? "bg-transparent backdrop-blur-md shadow-lg" : "bg-transparent shadow-md"}`}>
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
            <Link to="/AboutUs" className="text-gray-600 font-bold hover:text-blue-600">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/Pelayanan" className="text-gray-600 font-bold hover:text-blue-600">
              Pelayanan
            </Link>
          </li>
          <li>
            <Link to="/JadwalDokter" className="text-gray-600 font-bold hover:text-blue-600">
              Jadwal Dokter
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="text-gray-600 font-bold hover:text-blue-600">
              Hubungi kami
            </Link>
          </li>
        </ul>
        {/* Tombol pencarian untuk desktop */}
        <div className="hidden md:block ml-4">
          <button
            className="text-gray-600  focus:outline-none"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
        </div>
        <div className="md:hidden flex items-center gap-2">
          {/* Tombol pencarian untuk mobile */}
          <button
            className="text-gray-600 focus:outline-none"
            onClick={() => setShowSearch(!showSearch)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
            </svg>
          </button>
          {/* Tombol hamburger untuk mobile navigation */}
          <button
            ref={hamburgerRef}
            className="text-gray-600 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          >
            {isMenuOpen ? (
              // Icon X (close)
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Icon hamburger
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
            )}
          </button>
        </div>
      </nav>
      {/* Input pencarian muncul jika showSearch true */}
      {showSearch && (
        <div className="container mx-auto px-6 py-2 flex justify-end">
          <input
            type="text"
            placeholder="Cari..."
            className="border border-gray-300 rounded px-3 py-1 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-200"
            autoFocus
          />
        </div>
      )}
      {/* Menu navigasi untuk mobile */}
      {isMenuOpen && (
        <ul
          ref={menuRef}
          className="text-absolute md:hidden flex flex-col space-y-4 bg-white shadow-md p-4 "
        >
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
              to="/Pelayanan"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Pelayanan
            </Link>
          </li>
          <li>
            <Link
              to="/JadwalDokter"
              className="text-gray-600 hover:text-blue-600"
              onClick={toggleMenu}
            >
              Jadwal Dokter
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
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
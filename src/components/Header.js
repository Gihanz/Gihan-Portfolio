import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSun, FaMoon } from "react-icons/fa";
import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";

export default function Header({ darkMode, toggleDarkMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (path) => location.pathname === path;
  const baseLinkClass = "hover:text-blue-500 transition";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img
            src={darkMode ? logoDark : logoLight}
            alt="Logo"
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-medium text-sm">
          <Link
            to="/"
            className={`${baseLinkClass} ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${baseLinkClass} ${
              isActive("/projects") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`${baseLinkClass} ${
              isActive("/blog") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/resume"
            className={`${baseLinkClass} ${
              isActive("/resume") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle Dark Mode"
            className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <FaSun size={18} color="#facc15" />
            ) : (
              <FaMoon size={18} color="#3b82f6" />
            )}
          </button>
        </nav>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          <svg
            className="w-6 h-6 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-white dark:bg-gray-900/95 backdrop-blur-md shadow-md px-6 py-4 space-y-4 font-medium text-sm">
          <Link
            to="/"
            className={`${baseLinkClass} block ${
              isActive("/") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`${baseLinkClass} block ${
              isActive("/projects") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            to="/blog"
            className={`${baseLinkClass} block ${
              isActive("/blog") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            to="/resume"
            className={`${baseLinkClass} block ${
              isActive("/resume") ? "text-blue-600 font-semibold" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </Link>
          <button
            onClick={() => {
              toggleDarkMode();
              setMenuOpen(false);
            }}
            aria-label="Toggle Dark Mode"
            className="w-full text-left flex items-center gap-2 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
            {darkMode ? (
              <>
                <FaSun color="#facc15" />
                Light Mode
              </>
            ) : (
              <>
                <FaMoon color="#3b82f6" />
                Dark Mode
              </>
            )}
          </button>
        </nav>
      )}
    </header>
  );
}

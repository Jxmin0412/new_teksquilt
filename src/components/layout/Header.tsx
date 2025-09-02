import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`bg-transparent backdrop-blur-sm sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          to="/"
          className={`text-2xl font-bold ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Teksquilt
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link
                to="/"
                className={`hover:text-primary transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`hover:text-primary transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`hover:text-primary transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`hover:text-primary transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`hover:text-primary transition-colors duration-300 ${
                  scrolled ? "text-black" : "text-white"
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

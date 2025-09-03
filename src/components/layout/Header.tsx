import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Building, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg"
            : "bg-white/80 backdrop-blur-sm"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white px-2.5 py-1 rounded-lg font-bold text-lg">
                  TQ
                </div>
              </div>
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                TekSquilt
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group",
                      active
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-gray-900"
                    )}
                  >
                    <span className="relative z-10 flex items-center gap-1.5">
                      {item.name}
                    </span>

                    {/* Active Indicator */}
                    {active && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}

                    {/* Hover Effect */}
                    {!active && (
                      <div className="absolute inset-0 bg-gray-100 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <Link to="/employer-form">
                <Button
                  variant="outline"
                  className="border-gray-300 hover:border-gray-400"
                >
                  For Employers
                </Button>
              </Link>
              <div className="relative" ref={dropdownRef}>
                <Button
                  className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-700 text-white"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  Get Started
                  <ChevronDown
                    className={cn(
                      "ml-2 w-4 h-4 transition-transform duration-200",
                      isDropdownOpen && "rotate-180"
                    )}
                  />
                </Button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                    >
                      <div className="p-2">
                        <button
                          onClick={() => {
                            navigate("/employer-form");
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center">
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              For Employers
                            </div>
                            <div className="text-sm text-gray-600">
                              Post jobs and find talent
                            </div>
                          </div>
                        </button>

                        <button
                          onClick={() => {
                            navigate("/jobs");
                            setIsDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-colors group"
                        >
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 flex items-center justify-center">
                            <Users className="w-5 h-5 text-white" />
                          </div>
                          <div className="text-left">
                            <div className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              For Job Seekers
                            </div>
                            <div className="text-sm text-gray-600">
                              Find your dream job
                            </div>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-50 lg:hidden"
            >
              <div className="flex items-center justify-between p-4 border-b">
                <span className="text-lg font-semibold text-gray-900">
                  Menu
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="p-4">
                <div className="space-y-1">
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                      >
                        <Link
                          to={item.href}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                            active
                              ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-600 font-medium"
                              : "text-gray-700 hover:bg-gray-100"
                          )}
                        >
                          <span>{item.name}</span>
                          {active && (
                            <div className="ml-auto w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          )}
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <div className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl">
                    <p className="text-sm font-medium text-gray-700 mb-3">
                      Get Started
                    </p>
                    <div className="space-y-2">
                      <Link
                        to="/employer-form"
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all"
                      >
                        <Building className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">
                            For Employers
                          </div>
                          <div className="text-xs text-gray-600">
                            Post jobs and find talent
                          </div>
                        </div>
                      </Link>
                      <Link
                        to="/jobs"
                        className="flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:shadow-md transition-all"
                      >
                        <Users className="w-5 h-5 text-blue-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">
                            For Job Seekers
                          </div>
                          <div className="text-xs text-gray-600">
                            Find your dream job
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t">
                  <p className="text-sm text-gray-600 mb-2">Need help?</p>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-2 text-gray-900 font-medium hover:text-blue-600 transition-colors"
                  >
                    +1 972-837-7530
                  </a>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div className="h-14 sm:h-16" />
    </>
  );
};

export default Header;

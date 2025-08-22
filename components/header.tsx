"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Scroll spy functionality
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "products", "about", "enquiry"];
      const scrollPosition = window.scrollY + 100; // Offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId); // Set active immediately on click
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const getNavItemClasses = (section: string) => {
    const baseClasses =
      "transition-colors text-sm px-6 py-3 rounded-md font-medium h-10 flex items-center justify-center min-w-fit";
    return activeSection === section
      ? `${baseClasses} bg-orange-500 text-white font-bold hover:bg-orange-600`
      : `${baseClasses} text-gray-700 hover:text-green-600 hover:bg-green-50`;
  };

  const getMobileNavItemClasses = (section: string) => {
    const baseClasses =
      "transition-colors text-left px-6 py-3 rounded-md font-medium h-12 flex items-center min-w-full";
    return activeSection === section
      ? `${baseClasses} bg-orange-500 text-white font-bold hover:bg-orange-600`
      : `${baseClasses} text-gray-700 hover:text-green-600 hover:bg-green-50`;
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-green-700 text-white py-2 px-4">
        <div className="container mx-auto flex justify-center items-center text-xs sm:text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center">
            <span className="flex items-center">📍 Davangere, Karnataka</span>
            <span className="hidden md:inline">GST No. 29BNNPV8430L1Z0</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-10 h-10 sm:w-20 sm:h-20 bg-green-600 rounded-full flex items-center justify-center">
                <img src="/vb-foods-logo.jpg" alt="logo" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className={getNavItemClasses("home")}
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className={getNavItemClasses("products")}
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className={getNavItemClasses("about")}
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("enquiry")}
                className={getNavItemClasses("enquiry")}
              >
                Contact Us
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4">
              <div className="flex flex-col space-y-3">
                <button
                  onClick={() => scrollToSection("home")}
                  className={getMobileNavItemClasses("home")}
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className={getMobileNavItemClasses("products")}
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className={getMobileNavItemClasses("about")}
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("enquiry")}
                  className={getMobileNavItemClasses("enquiry")}
                >
                  Contact Us
                </button>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}

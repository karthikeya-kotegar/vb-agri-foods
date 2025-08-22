"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-4 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
          {/* Quick Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-white">
              Quick Contact
            </h3>
            <div className="space-y-0.5 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">🏢</span>
                <span className="text-xs sm:text-sm">VB Foods</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-orange-400">👤</span>
                <span className="text-xs sm:text-sm">Mr. Veeresh MV</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400 mt-1" />
                <div className="text-xs sm:text-sm">
                  4th Cross, 2nd main,
                  <br />
                  Shivkumarswamy Layout,
                  <br />
                  Davangere, Karnataka - 577005, India
                </div>
              </div>
              {/* <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs sm:text-sm underline cursor-pointer">
                  View Mobile Number
                </span>
              </div> */}
            </div>
          </div>

          {/* General Links */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-white">
              General Links
            </h3>
            <div className="space-y-0 sm:space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors text-left"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors text-left"
              >
                Products
              </button>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Videos
              </Link>
              <button
                onClick={() => scrollToSection("enquiry")}
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors text-left"
              >
                Contact Us
              </button>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Site Map
              </Link>
              <div className="mt-1 sm:mt-2">
                <span className="bg-red-600 text-white px-2 py-1 text-xs rounded">
                  RSS
                </span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-white">
              Products
            </h3>
            <div className="space-y-0 sm:space-y-2">
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Popcorn Maize
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Chana (Chickpeas)
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Chia Seeds
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Premium Rice
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Finger Millet (Ragi)
              </Link>
              <Link
                href="#"
                className="block text-xs sm:text-sm hover:text-orange-400 transition-colors"
              >
                Other Grains & Pulses
              </Link>
            </div>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-4 text-white">
              Company Info
            </h3>
            <div className="space-y-0.5 sm:space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs sm:text-sm">info@vbfoods.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs sm:text-sm">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-orange-400" />
                <span className="text-xs sm:text-sm">www.vbfoods.com</span>
              </div>
              <div className="mt-2 sm:mt-4">
                <p className="text-xs sm:text-sm text-gray-300">
                  GST No: 29APCPN7623R1Z3
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-3 sm:mt-8 pt-3 sm:pt-8 border-t border-green-600">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-gray-300 text-center">
              © 2024 VB Foods. All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Button */}
      {/* <div className="fixed bottom-2 sm:bottom-4 right-2 sm:right-4 z-50">
        <button className="bg-green-500 hover:bg-green-600 text-white p-2 sm:p-3 rounded-full shadow-lg transition-colors flex items-center">
          <span className="text-base sm:text-xl">💬</span>
          <span className="ml-1 sm:ml-2 text-xs sm:text-sm font-medium hidden sm:inline">
            WhatsApp Us
          </span>
        </button>
      </div> */}
    </footer>
  );
}

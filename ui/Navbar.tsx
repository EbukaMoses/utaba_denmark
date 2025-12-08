'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from "../ui/Container";

interface NavItem {
  title: string;
  path: string;
}

const NavItems: NavItem[] = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/Gallery" },
  { title: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav
      className={`w-full fixed py-3 lg:py-0 top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <Container className="max-w-screen-2xl px-4 py-0 lg:py-0 flex justify-between items-center">
        <Link
          href="/"
          className="relative group"
          aria-label="OnyeBF Technology"
        >
          <img
            src="https://res.cloudinary.com/dzhbpmnan/image/upload/v1765204783/logo_fcx95q.png"
            alt="OnyeBf Technology Logo"
            className="w-28 lg:w-40 h-auto transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex flex-row items-center gap-2">
          {NavItems.map((item, index) => (
            <Link
              href={item.path}
              key={index}
              className={`relative text-sm font-medium uppercase py-8 px-6 transition-all duration-300 group ${
                isActive(item.path)
                  ? 'text-[#FE6500]'
                  : scrolled
                  ? 'text-gray-700 hover:text-[#FE6500]'
                  : 'text-gray-800 hover:text-[#FE6500]'
              }`}
              aria-label={`Navigate to ${item.title} page`}
              aria-current={isActive(item.path) ? 'page' : undefined}
            >
              {item.title}
              <span
                className={`absolute bottom-6 left-1/2 -translate-x-1/2 h-0.5 bg-[#FE6500] transition-all duration-300 ${
                  isActive(item.path)
                    ? 'w-full'
                    : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-all duration-300 ${
            scrolled
              ? 'text-gray-700 hover:bg-gray-100'
              : 'text-gray-800 hover:bg-gray-100'
          }`}
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile navigation */}
        <div
          id="mobile-menu"
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-xl border-t border-gray-200 transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4">
            {NavItems.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                className={`block text-sm font-medium uppercase py-4 px-8 transition-all duration-200 ${
                  isActive(item.path)
                    ? 'text-[#FE6500] bg-[#FE6500]/10 border-l-4 border-[#FE6500]'
                    : 'text-gray-700 hover:text-[#FE6500] hover:bg-gray-50 hover:border-l-4 hover:border-[#FE6500]'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label={`Navigate to ${item.title} page`}
                aria-current={isActive(item.path) ? 'page' : undefined}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;

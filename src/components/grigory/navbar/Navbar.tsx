'use client';

import {FC, useState, useRef, useEffect} from "react";
import Button from "@/components/grigory/button/Button";

const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const links = [
    { href: "#about", label: "About" },
    { href: "#film_audio_post_mixing", label: "Film Audio Post/Mixing" },
    { href: "#location_sound", label: "Location Sound" },
    { href: "#music_mixing", label: "Music Mixing" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex fixed top-0 left-0 right-0 h-20 z-50 items-center gap-4 justify-end px-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm">
        {links.map((link) => (
          <a key={link.href} href={link.href} className="hover:opacity-70 transition-opacity">
            {link.label}
          </a>
        ))}
        <Button href="#contacts">Contacts</Button>
      </nav>

      {/* Mobile Navigation - Black Square */}
      <div className="lg:hidden fixed top-3 right-3 z-50" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-11 h-11 bg-black rounded-xl shadow-lg hover:opacity-80 transition-opacity"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="#FFF" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="#FFF" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-20 right-0 bg-white dark:bg-gray-800 shadow-lg rounded-md py-2 w-56">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 py-2 w-full">
              <Button href="#contacts" className="w-full">Contacts</Button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Navbar;
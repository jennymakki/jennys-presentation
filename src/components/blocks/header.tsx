"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HOME" },
    { href: "/projects", label: "PROJECTS" },
    { href: "/about", label: "ABOUT ME" },
  ];

  return (
    <>
      {/* HEADER */}
      <header
        className={`
          sticky top-0 z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#2090C8]/80 backdrop-blur-xl shadow-lg"
              : "bg-[#2090C8]"
          }
        `}
      >
        <div className="h-24 w-full max-w-6xl mx-auto px-6 flex items-center justify-between">

          <h1 className="font-bold text-2xl md:text-3xl text-white">
            Jenny Makki
          </h1>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex gap-10 text-white font-bold text-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-yellow-300 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[90] flex flex-col justify-center items-center w-12 h-12 gap-1 rounded-xl"
            aria-label="Toggle menu"
          >
            <span
              className={`w-8 h-1 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`w-8 h-1 bg-white rounded-full transition-opacity duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`w-8 h-1 bg-white rounded-full transition-transform duration-300 ${
                isOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      <div
        className={`
          md:hidden fixed inset-0 z-[60]
          bg-black/40 backdrop-blur-md
          transition-opacity duration-500
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* MOBILE MENU */}
      <nav
        className={`
          md:hidden fixed top-0 right-0 z-[70]
          w-72 h-full
          bg-[#2090C8]/90 backdrop-blur-xl
          shadow-2xl
          rounded-l-2xl
          transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-white text-2xl z-[80] hover:text-[#FF6F61] transition"
        >
          ✕
        </button>

        <ul className="mt-28 px-8 space-y-10 text-white font-bold text-2xl">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-[#FF6F61] transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
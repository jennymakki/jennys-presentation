"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="bg-[#2090C8] h-24 flex items-center justify-center">
      <div className="w-full max-w-5xl mx-auto px-6 flex items-center justify-between">
        <h1 className="font-roboto text-3xl text-white font-bold">
          Jenny Makki
        </h1>

        <nav className="hidden md:flex space-x-8 text-white font-bold text-2xl">
          <a href="/" className="hover:text-[#FF6F61] transition">HOME</a>
          <a href="/projects" className="hover:text-[#FF6F61] transition">PROJECTS</a>
          <a href="#" className="hover:text-[#FF6F61] transition">ABOUT ME</a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden absolute right-6 z-[999] flex flex-col justify-center items-center w-12 h-12 gap-1 rounded-xl transition-all duration-300"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white rounded-full transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-8 h-1 bg-white rounded-full transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
        </div>
      </header>

      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-md transition-opacity duration-500
          ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`
          md:hidden fixed top-0 right-0 z-50 w-60 h-full bg-[#2090C8] rounded-l-2xl shadow-xl transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <ul className="mt-32 p-6 text-2xl space-y-10 text-white font-bold">
          <li><a href="/" className="hover:text-blue-300">HOME</a></li>
          <li><a href="/projects" className="hover:text-blue-300">PROJECTS</a></li>
          <li><a href="#" className="hover:text-blue-300">ABOUT ME</a></li>
        </ul>
      </nav>
    </>
  );
}

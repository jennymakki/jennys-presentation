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

  return (
    <>
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
        <div className="h-24 w-full max-w-5xl mx-auto px-6 flex items-center justify-between">

          <h1 className="font-roboto text-3xl text-white font-bold">
            Jenny Makki
          </h1>

          <nav className="hidden md:flex space-x-8 text-white font-bold text-2xl">
            <Link
              href="/"
              className="hover:text-[#FF6F61] transition"
            >
              HOME
            </Link>

            <Link
              href="/projects"
              className="hover:text-[#FF6F61] transition"
            >
              PROJECTS
            </Link>

            <Link
              href="/about"
              className="hover:text-[#FF6F61] transition"
            >
              ABOUT ME
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[999] flex flex-col justify-center items-center w-12 h-12 gap-1 rounded-xl"
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
          md:hidden fixed inset-0 z-40
          bg-black/30 backdrop-blur-md
          transition-opacity duration-500
          ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        onClick={() => setIsOpen(false)}
      />

      <nav
        className={`
          md:hidden fixed top-0 right-0 z-50
          w-60 h-full
          bg-[#2090C8]/95 backdrop-blur-xl
          rounded-l-2xl shadow-2xl
          transition-transform duration-500
          ${
            isOpen
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        <ul className="mt-32 p-6 text-2xl space-y-10 text-white font-bold">

          <li>
            <Link
              href="/"
              className="hover:text-blue-300 transition"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
          </li>

          <li>
            <Link
              href="/projects"
              className="hover:text-blue-300 transition"
              onClick={() => setIsOpen(false)}
            >
              PROJECTS
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-300 transition"
              onClick={() => setIsOpen(false)}
            >
              ABOUT ME
            </Link>
          </li>

        </ul>
      </nav>
    </>
  );
}
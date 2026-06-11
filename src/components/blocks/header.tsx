"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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

  const handleContactClick = () => {
    setIsOpen(false);

    if (pathname === "/") {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <>
      <header
        className={`
          sticky top-0 z-50 transition-all duration-500
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

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-10 text-xl font-bold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    relative transition hover:text-yellow-300
                    ${isActive ? "text-yellow-300" : "text-white"}
                  `}
                >
                  {link.label}

                  <span
                    className={`
                      absolute left-0 -bottom-1 h-[2px] w-full
                      bg-yellow-300 origin-left
                      transition-transform duration-300
                      ${isActive ? "scale-x-100" : "scale-x-0"}
                    `}
                  />
                </Link>
              );
            })}

            <button
              onClick={handleContactClick}
              className="text-white hover:text-yellow-300 cursor-pointer transition"
            >
              CONTACT
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="
              md:hidden relative z-[90]
              flex flex-col justify-center items-center
              w-12 h-12 gap-1 rounded-xl
            "
          >
            <span
              className={`
                w-8 h-1 bg-white rounded-full
                transition-transform duration-300
                ${isOpen ? "rotate-45 translate-y-2" : ""}
              `}
            />

            <span
              className={`
                w-8 h-1 bg-white rounded-full
                transition-opacity duration-300
                ${isOpen ? "opacity-0" : "opacity-100"}
              `}
            />

            <span
              className={`
                w-8 h-1 bg-white rounded-full
                transition-transform duration-300
                ${isOpen ? "-rotate-45 -translate-y-2" : ""}
              `}
            />
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
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
      />

      {/* Mobile menu */}
      <nav
        className={`
          md:hidden fixed top-0 right-0 z-[70]
          w-72 h-full rounded-l-2xl
          bg-[#2090C8]/90 backdrop-blur-xl
          shadow-2xl
          transition-transform duration-500
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="
            absolute top-5 right-5
            text-2xl text-white
            hover:text-[#FF6F61]
            transition
          "
        >
          ✕
        </button>

        <ul className="mt-28 px-8 space-y-10 text-2xl font-bold text-white">
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

          <li>
            <button
              onClick={handleContactClick}
              className="hover:text-[#FF6F61] cursor-pointer transition"
            >
              CONTACT
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
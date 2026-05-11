"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        flex flex-col md:flex-row
        items-center justify-between
        gap-6
        px-6 md:px-16
        py-10

        text-white
        bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
      "
    >
      {/* subtle glow */}
      <div className="absolute inset-0 bg-white/5 blur-3xl" />

      <div className="relative text-center md:text-left text-white/80 text-sm">
        © Jenny Makki 2025
      </div>

      <div className="relative flex gap-5 items-center">
        <a href="mailto:jjennyeklundd@hotmail.com" aria-label="Email">
          <Mail className="w-7 h-7 text-white/80 hover:text-yellow-300 transition" />
        </a>

        <a
          href="https://github.com/jennymakki"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github className="w-7 h-7 text-white/80 hover:text-yellow-300 transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/jenny-makki-197614210/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin className="w-7 h-7 text-white/80 hover:text-yellow-300 transition" />
        </a>
      </div>

      <div className="relative text-center md:text-right text-white/60 text-sm">
        jjennyeklundd@hotmail.com
      </div>
    </footer>
  );
}
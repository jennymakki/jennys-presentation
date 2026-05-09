"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="font-roboto row-start-3 flex flex-col md:flex-row gap-4 md:gap-15 items-center justify-center text-sm py-6 text-white pb-10">
      <div className="text-center md:text-left">
        © Jenny Makki 2025
      </div>

      <div className="flex gap-4 items-center">
      <a href="mailto:jjennyeklundd@hotmail.com" aria-label="Email">
            <Mail className="w-8 h-8 text-white hover:text-[#FF6F61]" />
          </a>
          <a
            href="https://github.com/jennymakki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="w-8 h-8 text-white hover:text-[#FF6F61]" />
          </a>
          <a
            href="https://www.linkedin.com/in/jenny-makki-197614210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-8 h-8 text-white hover:text-[#FF6F61]" />
          </a>
      </div>

      <div className="text-center md:text-right">
        jjennyeklundd@hotmail.com
      </div>
    </footer>
  );
}
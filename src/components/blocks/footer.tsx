"use client";

import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        flex flex-col
        items-center
        gap-6
        px-6 md:px-16
        py-10
        text-white
        bg-[radial-gradient(circle_at_top,#42b7f5,#2090C8,#176b94)]
      "
    >
      {/* subtle glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-white/5 blur-3xl"
      />

      <div className="relative flex flex-col items-center gap-5 text-center">
        <p className="text-sm text-white/80">
          © {new Date().getFullYear()} Jenny Makki
        </p>

        <nav
          aria-label="Sociala länkar"
          className="flex items-center gap-5"
        >
          <a
            href="mailto:jjennyeklundd@hotmail.com"
            aria-label="Skicka e-post till Jenny Makki"
            className="text-white/80 transition hover:text-yellow-300"
          >
            <Mail className="h-6 w-6" aria-hidden="true" />
          </a>

          <a
            href="https://github.com/jennymakki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jenny Makki på GitHub"
            className="text-white/80 transition hover:text-yellow-300"
          >
            <Github className="h-6 w-6" aria-hidden="true" />
          </a>

          <a
            href="https://www.linkedin.com/in/jenny-makki-197614210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Jenny Makki på LinkedIn"
            className="text-white/80 transition hover:text-yellow-300"
          >
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </a>
        </nav>

        <a
          href="https://www.makkistudio.se"
          target="_blank"
          rel="noopener noreferrer"
          className="
            text-sm
            text-white/70
            transition
            hover:text-white
            underline-offset-4
            hover:underline
          "
        >
          Website designed & developed by Makki Studio
        </a>
      </div>
    </footer>
  );
}
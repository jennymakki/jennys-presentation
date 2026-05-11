import { Mail, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export default function ContactLinks() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-6">

      {/* AVATAR */}
      <div className="relative mb-2">
        <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-110" />

        <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
          <Image
            src="/contact.png"
            alt="Jenny avatar"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* TEXT */}
      <p className="text-white/80">
        Or reach me directly through
      </p>

      {/* ICONS */}
      <div className="flex gap-6">
        <a href="mailto:jjennyeklundd@hotmail.com">
          <Mail className="w-10 h-10 text-white hover:text-yellow-300 transition" />
        </a>

        <a href="https://github.com/jennymakki" target="_blank">
          <Github className="w-10 h-10 text-white hover:text-yellow-300 transition" />
        </a>

        <a href="https://www.linkedin.com/in/jenny-makki-197614210/" target="_blank">
          <Linkedin className="w-10 h-10 text-white hover:text-yellow-300 transition" />
        </a>
      </div>

      <p className="text-white/60 text-sm mt-6 max-w-xs">
        I usually respond within a few days. I am very excited to hear from you!
      </p>

    </div>
  );
}
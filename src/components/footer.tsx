import Image from "next/image";

export default function Footer() {
  return (
    <footer className="font-roboto row-start-3 flex flex-col md:flex-row gap-4 md:gap-15 items-center justify-center text-sm py-6 text-white pb-10">
      <div className="text-center md:text-left">
        © Jenny Makki 2025
      </div>

      <div className="flex gap-4 items-center">
        <a
          href="https://github.com/jennymakki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Image
            src="/github.svg"
            alt="GitHub icon"
            width={42}
            height={42}
            aria-hidden
          />
        </a>
        <a
          href="https://www.linkedin.com/in/jenny-makki-197614210/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:underline"
        >
          <Image
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={60}
            height={60}
            aria-hidden
          />
        </a>
      </div>

      <div className="text-center md:text-right">
        jjennyeklundd@hotmail.com
      </div>
    </footer>
  );
}
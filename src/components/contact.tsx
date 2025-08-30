import { Mail, Github, Linkedin, Download } from "lucide-react";
export default function Contact() {
  return (
    <div className="items-center mt-10">
      <h6 className="text-[#2090C8] font-roboto font-bold text-3xl md:text-4xl text-center mb-2">
        Contact Information
      </h6>
      <div className="max-w-xl bg-[#EBEBEB] rounded-2xl shadow-md p-6 mx-auto">
        <div className="flex justify-center gap-6 pt-3 pb-3">
          <a href="mailto:jjennyeklundd@hotmail.com" aria-label="Email">
            <Mail className="text-[#2090C8] hover:text-[#FF6F61] w-12 h-12" />
          </a>
          <a
            href="https://github.com/jennymakki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github className="text-[#2090C8] hover:text-[#FF6F61] w-12 h-12" />
          </a>
          <a
            href="https://www.linkedin.com/in/jenny-makki-197614210/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-[#2090C8] hover:text-[#FF6F61] w-12 h-12" />
          </a>
          <a
            href="/JennyMakkiCV.pdf"
            download
            aria-label="Download CV"
            className="flex flex-col items-center text-[#2090C8] hover:text-[#FF6F61]"
          >
            <Download className="w-12 h-12" />
            <span className="text-sm font-bold mt-1">CV</span>
          </a>
        </div>
      </div>
    </div>
  );
}

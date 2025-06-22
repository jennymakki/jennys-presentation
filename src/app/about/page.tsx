import Header from "@/components/header";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Image from "next/image";

export default function About() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen bg-[#f5f5f5] font-roboto">
      <Header />

      <main className="space-y-10 px-4 md:px-10 mt-10 mb-16">
        <h2 className="text-[#2090C8] font-bold text-3xl md:text-4xl text-center mb-6">
          About Me
        </h2>

        <div className="max-w-xl mx-auto bg-[#EBEBEB] p-6 rounded-2xl shadow-md">
          <h2 className="text-[#2090C8] font-bold text-lg">My Story</h2>
          <p className="text-md text-gray-800">
            I transitioned from teaching to tech driven by a desire to build
            things that help people. My experience in the classroom sharpened my
            communication and problem-solving skills—both of which I now apply
            to writing clean, accessible code.
          </p>
        </div>

        <div className="max-w-xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
          <div className="flex-1 bg-[#EBEBEB] p-6 rounded-2xl shadow-md">
            <h3 className="text-[#2090C8] font-bold text-lg">What I do</h3>
            <p className="text-md text-gray-800">
              I am currently studying full-stack development with a focus on Java
              and JavaScript. My training includes hands-on projects using
              technologies like React and Node.js. I am gaining experience in
              agile, team-based environments.
            </p>
          </div>

          <div className="w-full md:w-60 h-60 relative rounded-2xl overflow-hidden flex-shrink-0 mx-auto">
            <Image
              src="/JennyMakki.png"
              alt="Jenny Makki"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="max-w-xl mx-auto bg-[#EBEBEB] p-6 rounded-2xl shadow-md">
          <h4 className="text-[#2090C8] font-bold text-lg">
            Designing of Everyone
          </h4>
          <p className="text-md text-gray-800">
            I enjoy exploring design tools and building fun side projects to
            improve my skills. I am also deeply passionate about
            accessibility—creating inclusive, user-friendly experiences that
            work for everyone is something I truly care about.
          </p>
        </div>
        <Contact />
      </main>

      <footer className="row-start-4 bg-[#2090C8] w-full">
        <Footer />
      </footer>
    </div>
  );
}

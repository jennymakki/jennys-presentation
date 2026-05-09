import Image from "next/image";

export default function Introduction() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 md:px-16">

      <div className="hidden md:block absolute left-[-120px] top-20 w-[300px] h-[300px] rounded-full bg-[#2090C8]/10 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">

<div
  className="
    relative flex-shrink-0
    transition-transform duration-700
    hover:-translate-y-3
  "
>
<div
  className="
    absolute inset-0 scale-110 rounded-full
    bg-gradient-to-br from-[#2090C8]/40 to-[#FF6F61]/30
    blur-sm
    animate-[spin_12s_linear_infinite]
  "
/>
          <div className="relative w-64 h-64 md:w-80 md:h-80 animate-[float_6s_ease-in-out_infinite] rounded-full overflow-hidden shadow-2xl border-4 border-white">

            <Image
              src="/JennyMakki.png"
              alt="Jenny Makki"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-4 -right-2 bg-[#FF6F61] text-white px-4 py-2 rounded-2xl shadow-lg text-sm font-semibold">
            Full Stack Developer
          </div>
        </div>

<div
  className="
    max-w-2xl space-y-6 text-center md:text-left
    transition-all duration-500
    hover:-translate-y-1
  "
>
          <div className="inline-block bg-[#2090C8]/10 text-[#2090C8] px-4 py-2 rounded-full text-sm font-semibold">
            About Me
          </div>

          <h2 className="text-4xl md:text-3xl font-bold leading-tight text-gray-900 max-w-lg">
            Building experiences that feel
            <span className="text-[#2090C8]"> creative</span>,
            and intuitive.
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            Hi! I’m Jenny — a full stack developer who loves combining design,
            structure, and interaction into modern web experiences.
          </p>

          <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
            I enjoy creating interfaces that feel playful yet functional, while
            also building the backend systems that make everything work
            seamlessly behind the scenes.
          </p>

          <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">

<span
  className="
    bg-[#EBEBEB]
    px-4 py-2 rounded-full text-sm font-medium
    transition-all duration-300
    hover:bg-[#2090C8]
    hover:text-white
    hover:-translate-y-1
    hover:shadow-lg
  "
>              React
            </span>

<span
  className="
    bg-[#EBEBEB]
    px-4 py-2 rounded-full text-sm font-medium
    transition-all duration-300
    hover:bg-[#2090C8]
    hover:text-white
    hover:-translate-y-1
    hover:shadow-lg
  "
>              Next.js
            </span>

<span
  className="
    bg-[#EBEBEB]
    px-4 py-2 rounded-full text-sm font-medium
    transition-all duration-300
    hover:bg-[#2090C8]
    hover:text-white
    hover:-translate-y-1
    hover:shadow-lg
  "
>              TypeScript
            </span>

<span
  className="
    bg-[#EBEBEB]
    px-4 py-2 rounded-full text-sm font-medium
    transition-all duration-300
    hover:bg-[#2090C8]
    hover:text-white
    hover:-translate-y-1
    hover:shadow-lg
  "
>              Node.js
            </span>

          </div>
        </div>
      </div>
    </section>
  );
}
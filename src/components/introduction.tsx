import Image from "next/image";

export default function Introduction() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-6">
              <div className="w-60 flex-shrink-0 h-60 md:w-96 md:ml-10 md:h-96 relative rounded-full overflow-hidden">
        <Image
          src="/JennyMakki.png"
          alt="Jenny Makki"
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-[#EBEBEB] rounded-2xl md:ml-5 p-6 ml-10 mr-10 shadow-md max-w-md text-black">
        <p>
        Hi! I am Jenny, a full stack developer who loves building clean, user-friendly web apps. I enjoy working with both front-end and back-end tools to bring ideas to life.
        </p>
        </div>
    </div>

  ) }

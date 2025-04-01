import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export default function About() {
  return (
    // Container with proper centering and padding
    <div className="w-full max-w-screen-xl mx-auto px-6 py-10 mt-20 md:mt-0 scroll-mt-20">
      <h3 style={{ fontFamily: "Ovo, serif" }} className="text-xl md:text-2xl mb-1 font-ovo text-center">
        Introduction
      </h3>
      <h2 style={{ fontFamily: "Ovo, serif" }} className="text-2xl md:text-5xl font-ovo text-center">
        About me
      </h2>

      {/* Flex container to align image and text/cards in center */}
      <div className="w-full flex flex-col lg:flex-row gap-20 items-center justify-center sm:mt-7 my-0 sm:my-16">
        {/* Profile Image */}
        <div className="w-64 sm:w-80 self-center rounded-3xl">
          <Image alt="user" src={assets.user_image} className="w-full rounded-3xl drop-shadow-lg" />
        </div>

        {/* About me section */}
        <div className="w-full max-w-2xl">
          <p className="mb-10 sm:text-lg text-sm font-ovo text-center lg:text-left">
            I’m a MERN stack developer with a strong foundation in JavaScript. I’m passionate about building dynamic web applications using MongoDB, Express.js, React, and Node.js. Although I’m just starting my career, I’m eager to learn and grow in the field of web development.
          </p>

          {/* Info cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoList.map(({ icon, title, description }, index) => (
              <li key={index} className="border-[0.5px] border-gray-300 rounded-xl cursor-pointer p-6 hover:shadow-[4px_4px_0_#000] hover:translate-x-1 duration-500">
                <Image alt={title} src={icon} className="w-7 mt-3" />
                <h4 className="text-xl md:text-2xl text-gray-700 font-semibold my-4 font-ovo">{title}</h4>
                <p className="font-ovo text-gray-600 text-sm">{description}</p>
              </li>
            ))}
          </ul>

          {/* Tools Section */}
          <div className="my-10 mb-0 max-w-2xl">
            <h5 style={{ fontFamily: "Ovo, serif" }} className="font-ovo text-gray-600 mt-8 my-5">
              Tools I Use
            </h5>
            <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8">
              {/* Icons with hover effect */}
              <div className="rounded-xl group self-center w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaReact className="text-cyan-500 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </div>
              <div className="rounded-xl group self-center w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaNodeJs className="text-green-600 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </div>
              <div className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaHtml5 className="text-[#E34C26] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </div>
              <div className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <IoLogoCss3 className="text-[#2965f1] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <SiMongodb className="text-green-500 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaBootstrap className="text-[#7110EF] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <SiPostgresql className="text-[#0064a5] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <TbBrandNextjs className="text-5xl group-hover:scale-125 duration-500 text-neutral-700 md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <RiJavascriptFill className="text-5xl group-hover:scale-125 duration-500 text-[#f0db4f] md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4">
                <SiTailwindcss className="text-5xl group-hover:scale-125 duration-500 text-sky-500 md:text-4xl sm:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

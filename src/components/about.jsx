import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiPostgresql, SiTailwindcss } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";

export default function About() {
  return (
    <div className="w-full px-[12%] py-10 scroll-mt-20 mx-auto">
      <h3 className="text-xl md:text-2xl font-ovo text-center">Introduction</h3>
      <h2 className="text-2xl md:text-5xl font-ovo text-center">About me</h2>
      <div className="w-full flex flex-col md:flex-row gap-20 item-center my-20">
        <div className="w-64 sm:80 rounded-3xl max-w-none">
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1 ">
          <p className="max-w-2xl mb-10 font-ovo">
            I’m a MERN stack developer with a strong foundation in JavaScript.
            I’m passionate about building dynamic web applications using
            MongoDB, Express.js, React, and Node.js. Although I’m just starting
            my career, I’m eager to learn and grow in the field of web
            development.{" "}
          </p>
          {/* Cards of languages, Education and Projects */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 max-w-2xl gap-6">
            {infoList.map(({ icon, iconDark, title, description }, index) => {
              return (
                <li
                  key={index}
                  className="border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lighthover hover:lightboxshadow hover:translate-x-1"
                >
                  <Image alt={title} src={icon} className="w-7 mt-3" />
                  <h4 className="text-xl md:text-2xl text-gray-700 font-semibold my-4 font-ovo">
                    {title}
                  </h4>
                  <p className="font-ovo text-gray-600 text-sm">
                    {description}
                  </p>
                </li>
              );
            })}
          </ul>
          {/* Tools i use */}
          <div className="my-10 max-w-2xl">
            <h5 className="font-ovo text-gray-600 my-6">Tools i use</h5>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  items-center justify-center gap-8 pb-28 flex-wrap">
              <div className="rounded-xl self-center w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaReact className="text-cyan-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl self-center w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaNodeJs className="text-green-600 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4">
                <FaHtml5 className=" text-[#E34C26] text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <IoLogoCss3 className=" text-[#2965f1] text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <SiMongodb className="text-green-500 text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <FaBootstrap className="text-[#7110EF] text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <SiPostgresql className="text-[#0064a5] text-5xl md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <TbBrandNextjs className="text-5xl text-neutral-700 md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <RiJavascriptFill className="text-5xl text-[#f0db4f] md:text-4xl sm:text-3xl" />
              </div>
              <div className="rounded-xl w-[70px] border-[0.5px] border-gray-700 p-4 ">
                <SiTailwindcss className="text-5xl text-sky-500 md:text-4xl sm:text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

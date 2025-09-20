import { assets, infoList } from "@/assets/assets";
import Image from "next/image";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function About({ isDark }) {
  return (
    // Container with proper centering and padding
    <div className="w-full max-w-screen-xl mx-auto px-6 py-10 md:mt-0 scroll-mt-20">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-base md:text-2xl font-ovo ovo text-center"
      >
        Introduction
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-2xl md:text-5xl font-ovo ovo text-center mb-10"
      >
        About me
      </motion.h2>

      {/* Flex container to align image and text/cards in center */}
      <div className="w-full flex flex-col lg:flex-row gap-20 items-center justify-center sm:mt-7 my-0 sm:my-16">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 100, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-64 sm:w-80 self-center rounded-3xl"
        >
          <Image
            alt="user"
            src={assets.user_image}
            className="w-full rounded-3xl drop-shadow-lg"
          />
        </motion.div>

        {/* About me section */}
        <div className="w-full max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 100, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-10 sm:text-lg text-sm font-ovo text-center lg:text-left"
          >
            I’m a full-stack developer skilled in JavaScript/TypeScript, working
            with Node.js, Express, MongoDB, PostgreSQL, and Prisma on the
            backend, and React, Next.js, Redux Toolkit, and Tailwind CSS on the
            frontend. I build scalable apps with RESTful APIs, follow Agile
            SDLC, leverage CI/CD workflows, and enjoy solving problems while
            delivering efficient, maintainable end-to-end solutions.
          </motion.p>

          {/* Info cards */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {infoList.map(
              ({ icon, iconDark, title, description, delay }, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 100 }}
                  whileInView={{ opacity: 100, x: 0 }}
                  transition={{ duration: 0.8, delay: delay }}
                  className="border-[0.5px] border-gray-300 dark:hover:bg-darkhover/70 rounded-xl cursor-pointer p-6 hover:shadow-[4px_4px_0_#000] hover:translate-x-1 duration-500 dark:hover:shadow-[4px_4px_0_#fff]"
                >
                  <Image
                    alt={title}
                    src={isDark ? iconDark : icon}
                    className="w-7 mt-3"
                  />
                  <h4 className="text-xl md:text-2xl dark:text-gray-100 text-gray-700 font-semibold my-4 font-ovo">
                    {title}
                  </h4>
                  <p className="font-ovo dark:text-gray-200 text-gray-600 text-sm">
                    {description}
                  </p>
                </motion.li>
              )
            )}
          </ul>

          {/* Tools Section */}
          <div className="my-10 mb-0 max-w-2xl">
            <motion.h5
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 100 }}
              transition={{ duration: 2, delay: 1 }}
              style={{ fontFamily: "Ovo, serif" }}
              className="font-ovo dark:text-gray-300 text-gray-600 mt-8 my-5"
            >
              Tools I use
            </motion.h5>
            <div className="grid grid-cols-3 md:grid-cols-5 items-center justify-center gap-8">
              {/* Icons with hover effect */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 0.3 }}
                className="rounded-xl group self-center w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <FaReact className="text-cyan-500 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 0.6 }}
                className="rounded-xl group self-center w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <FaNodeJs className="text-green-600 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 0.9 }}
                className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiTypescript className="text-[#3178C6] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-2xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 1.2 }}
                className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiExpress className="text-[#303030] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiMongodb className="text-green-500 group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 1.8 }}
                className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiRedux className="text-[#764abc] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 2.2 }}
                className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiPostgresql className="text-[#0064a5] group-hover:scale-125 duration-500 text-5xl md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 2.5 }}
                className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <TbBrandNextjs className="text-5xl group-hover:scale-125 duration-500 text-gray-700 dark:text-gray-400 md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 2.8 }}
                className="rounded-xl group w-[80px] md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <RiJavascriptFill className="text-5xl group-hover:scale-125 duration-500 text-[#f0db4f] md:text-4xl sm:text-3xl" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 100 }}
                transition={{ duration: 2, delay: 3.2 }}
                className="rounded-xl w-[80px] group md:w-[70px] border-[0.5px] border-gray-700 p-4"
              >
                <SiTailwindcss className="text-5xl group-hover:scale-125 duration-500 text-sky-500 md:text-4xl sm:text-3xl" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

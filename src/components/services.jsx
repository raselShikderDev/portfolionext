import { serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10 mt-20 md:mt-0 scroll-mt-20 mx-auto">
      <motion.h3
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-base md:text-2xl font-ovo ovo text-center"
      >
        What i offers
      </motion.h3>
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="text-2xl md:text-5xl font-ovo ovo text-center mb-7"
      >
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 100, y: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        className="max-w-3xl dark:text-gray-200 ovo sm:text-lg text-sm mx-auto mt-4 font-ovo text-center"
      >
        Blending Creativity with Code to Deliver High-Performance, Responsive,
        and Scalable Web Applications. Specializing in Frontend Technologies,
        and Modern Web Development.
      </motion.p>
      <div className="grid grid-cols-1 my-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
        {serviceData.map(({ icon, title, description, link, delay }, index) => {
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 100, x: 0 }}
              transition={{ duration: 0.8, delay: delay }}
              className="border-[0.5px] shadow-sm border-gray-300 rounded-xl cursor-pointer px-8 py-12 hover:bg-lighthover hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#fff] dark:hover:bg-darkhover hover:scale-105"
            >
              <Image src={icon} alt={title} className="w-10" />
              <h3 className="text-xl md:text-2xl dark:text-gray-100 text-gray-700 font-semibold my-4 font-ovo">
                {title}
              </h3>
              <p className="font-ovo dark:text-gray-300 text-gray-600 ovo sm:text-lg text-sm leading-5">
                {description}
              </p>
              <Link
                style={{ fontFamily: "Ovo, serif" }}
                className="mt-5 gap-2 flex items-center dark:text-gray-300 sm:text-lg text-sm text-gray-600"
                href={"#"}
              >
                Read More <MdArrowRightAlt />
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

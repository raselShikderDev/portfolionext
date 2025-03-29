import { serviceData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Services = () => {
  return (
    <div className="w-full px-[12%] py-10 mt-20 md:mt-0 scroll-mt-20 mx-auto">
      <h3
        style={{ fontFamily: "Ovo, serif" }}
        className="text-xl md:text-2xl font-ovo text-center"
      >
        What i offers
      </h3>
      <h2
        style={{ fontFamily: "Ovo, serif" }}
        className="text-2xl md:text-5xl font-ovo text-center"
      >
        My Services
      </h2>
      <p
        style={{ fontFamily: "Ovo, serif" }}
        className="max-w-3xl mx-auto mt-4 font-ovo text-center"
      >
        Blending Creativity with Code to Deliver High-Performance, Responsive,
        and Scalable Web Applications. Specializing in Frontend Technologies,
        and Modern Web Development.
      </p>
      <div className="grid grid-cols-1 my-16 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
        {serviceData.map(({ icon, title, description, link }, index) => {
          return (
            <div
              style={{ fontFamily: "Ovo, serif" }}
              key={index}
              className="border-[0.5px] shadow-sm border-gray-300 rounded-xl cursor-pointer px-8 py-12 hover:bg-lighthover hover:shadow-[4px_4px_0_#000] hover:scale-105"
            >
              <Image src={icon} alt={title} className="w-10" />
              <h3 className="text-xl md:text-2xl text-gray-700 font-semibold my-4 font-ovo">
                {title}
              </h3>
              <p
                style={{ fontFamily: "Ovo, serif" }}
                className="font-ovo text-gray-600 text-sm leading-5"
              >
                {description}
              </p>
              <Link
                style={{ fontFamily: "Ovo, serif" }}
                className="mt-5 gap-2 flex items-center text-gray-600"
                href={"#"}
              >
                Read More <MdArrowRightAlt />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;

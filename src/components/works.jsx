import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { MdArrowRightAlt } from "react-icons/md";

const Works = () => {
  return (
    <div className="w-full px-[12%] py-10 mt-20 md:mt-0 scroll-mt-20 mx-auto">
      <h3
        style={{ fontFamily: "Ovo, serif" }}
        className="text-xl md:text-2xl mb-1 font-ovo text-center"
      >
        My portfolio
      </h3>
      <h2
        style={{ fontFamily: "Ovo, serif" }}
        className="text-2xl md:text-5xl font-ovo text-center"
      >
        My works
      </h2>
      <p
        style={{ fontFamily: "Ovo, serif" }}
        className="max-w-3xl sm:text-lg text-sm mx-auto mt-4 font-ovo text-center"
      >
        Here’s a collection of web applications and projects I’ve built,
        combining modern design, seamless user experience, and cutting-edge
        technologies.
      </p>
      <div className="grid grid-cols-1 my-16 mt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 items-center">
        {workData.map(({ bgImage, title, description }, index) => {
          return (
            <div
              style={{
                fontFamily: "Ovo, serif",
                backgroundImage: `url(${bgImage})`,
              }}
              key={index}
              className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group"
            >
              <div className="flex gap-2 justify-between items-center w-10/12 rounded-md bg-white text-black absolute bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 duration-500 group-hover:bottom-7">
                <div className="">
                  <h3 className="font-semibold">{title}</h3>
                  <p className="text-sm text-gray-700">{description}</p>
                </div>
                <div className="flex items-center justify-center rounded-full w-9 border border-black shadow-[2px_2px_0px_#000] aspect-square group-hover:bg-lime-300 transition">
                  <Image
                    src={assets.send_icon}
                    alt="Send Icon"
                    className="w-5"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
        <Link
          className="flex w-max mx-auto text-center gap-2 items-center active:scale-105 px-5 sm:px-10 py-1 sm:py-2.5 font-ovo my-20 duration-500 border hover:bg-lighthover border-gray-700 rounded-full"
          href={"#"}
        >
          Show more <MdArrowRightAlt />
        </Link>
    </div>
  );
};

export default Works;

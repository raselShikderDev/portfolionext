import { assets } from "@/assets/assets";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { GoDownload } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex w-11/12 mx-auto items-center h-screen mt-10 justify-center gap-4">
      <div className="w-8/12 flex flex-col items-center space-y-3 mt-24 sm:mt-0">
        <Image
          alt="user"
          src={assets.profile_img}
          className="w-32 rounded-full shadow-sm drop-shadow-lg"
        />
        <h2
          style={{ fontFamily: "Ovo, serif" }}
          className="flex gap-2 items-center text-xl md:text-2xl font-ovo"
        >
          Hi! I am Rasel Shikder{" "}
          <Image alt="hand" className="w-6" src={assets.hand_icon} />
        </h2>
        <h3 className="text-2xl text-center sm:text-4xl lg:text-5xl xl:text-[66px] ovo">
          Mern Stack Developer <br /> based on Dhaka
        </h3>
        <p className="text-neutral-700 text-sm sm:text-base text-center max-w-2xl mx-auto ovo">
          Transforming Ideas into Stunning, Interactive, and Scalable Web
          Experiences with a Focus on Performance, Aesthetics, and Modern
          Frontend Technologies.
        </p>
        <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row items-center space-x-3 mt-2">
          <Link
            href={"#"}
            className="flex items-center gap-1 shadow-xl active:scale-105 px-5 sm:px-10 py-1 sm:py-2.5 bg-darkhover text-white rounded-full font-ovo"
          >
            Connect with me <MdArrowRightAlt />
          </Link>
          <Link
            href="/sample-resume.pdf"
            download
            className="flex active:scale-105 items-center gap-1 shadow-xl px-5 sm:px-10 py-1 sm:py-2.5 rounded-full text-darkhover border border-gray-500"
          >
            my Resume <GoDownload />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full px-[12%] py-10 pb-5 mt-20 md:mt-0 scroll-mt-20 mx-auto">
      <Link className="flex items-center justify-center" href={"/"}>
        <h1 className="text-3xl md:text-7xl text-center lg:text-[28px] font-semibold">
          Rasel Shikder<span className="text-red-600">.</span>
        </h1>
      </Link>
      <p className="max-w-3xl mx-auto mt-1 text-gray-600 flex items-center justify-center gap-3 text-center">
        <Image src={assets.mail_icon} alt="mail" className="w-7" />{" "}
        rasel.sikder777.rk@gmail.com
      </p>
      <div className="mt-8 border-b border-gray-400"></div>
      <div className="flex flex-col gap-3 md:flex-row justify-between my-4">
        <div className="text-gray-600">
          <p>@ 2025 Rasel Shikder. All rights reserved</p>
        </div>
        <div className="space-x-7 md:space-x-14">
          <Link className="text-gray-600" href={"#"}>
            Terms of Services
          </Link>
          <Link className="text-gray-600" href={"#"}>
            Privacy Policy
          </Link>
          <Link className="text-gray-600" href={"#"}>
            Connect with me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;

import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

export default function Navbar() {
  return (
    <>
      <div className="-z-10 fixed top-0 w-11/12 right-0 translate-y-[-80%]">
        <Image
          alt="Header bg"
          className="w-full"
          src={assets.header_bg_color}
        />
      </div>
      <nav className="flex justify-between px-5 lg:px-8 xl:px-[8%] item-center z-50 py-4">
        <Link href={"/"}>
          {/* <Image
          src={assets.logo}
          alt="Rasel Shikder"
          className="w-28 cursor-pointer mr-14"
        /> */}
          <h1 className="text-3xl font-semibold">
            Rasel Shikder<span className="text-red-600">.</span>
          </h1>
        </Link>
        <ul className="hidden md:flex item-center bg-white bg-opacity-50 shadow-sm gap-6 lg:gap-8 px-12 py-3 rounded-full">
          <li className="font-ovo">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="font-ovo">
            <Link href={"about"}>About me</Link>
          </li>
          <li>
            <Link href={"services"}>Services</Link>
          </li>
          <li className="font-ovo">
            <Link href={"works"}>My works</Link>
          </li>
          <li className="font-ovo">
            <Link href={"testimonials"}>Testimonials</Link>
          </li>
        </ul>
        <div className="flex item-center gap-6">
          <button>
            <Image alt="Moon" className="w-6" src={assets.moon_icon}/>
          </button>
          <Link
            className="hidden lg:flex item-center px-10 py-2.5 font-ovo border border-gray-600 rounded-full ml-4"
            href={"#"}
          >
            Connect <GoArrowUpRight className="self-center ml-2 text-semibold text-black" />
          </Link>
          <button className="block md:hidden ml-3">
            <Image alt="Navbar" className="w-6" src={assets.menu_black}/>
          </button>
        </div>
      </nav>
    </>
  );
}

// http://erp.wewb.gov.bd/wewb-erp//dynamicCombo/countryList?offset=0&limit=20&q=&_=1742930094407

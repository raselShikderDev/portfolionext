import { assets } from "@/assets/assets";
import Image from "next/image";

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
            I’m a MERN stack developer with a strong foundation in
            JavaScript. I’m passionate about building dynamic web applications
            using MongoDB, Express.js, React, and Node.js. Although I’m just
            starting my career, I’m eager to learn and grow in the field of web
            development.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

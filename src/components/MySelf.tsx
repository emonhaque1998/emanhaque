"use client";
import { Typewriter } from "react-simple-typewriter";
import Image from "next/image";
import { useState } from "react";
import HorizontalRowDotted from "./HorizontalRowDotted";
import { FaLinkedin } from "react-icons/fa6";

export default function MySelf() {
  const [showAbailable, setAvailable] = useState(false);
  return (
    <div className="dark:bg-[#00283a] bg-white w-1/3 z-30 sticky max-md:hidden px-10 py-10 top-22 left-40 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="justify-center relative inline-block">
            <Image
              src="/assets/images/emon.jpg"
              className="rounded-full cursor-pointer"
              alt="Eman H."
              onMouseEnter={() => setAvailable(true)}
              onMouseLeave={() => setAvailable(false)}
              width={100}
              height={100}
            />
            <div
              className={`bg-[#70ba65] flex justify-center items-center border-white dark:border-[#00283a] border-2 w-5 h-5 rounded-full absolute bottom-1 right-2 ${
                showAbailable && "w-full left-1/2 -translate-x-1/2"
              } transition-all duration-300 ease-in-out`}
            >
              {showAbailable && (
                <span className="text-[8px] font-bold">AVAILABLE FOR HIRE</span>
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-lg font-bold">Eman H.</h1>
          <h3 className="text-sm text-gray-400">
            I'm a{" "}
            <span className="dark:text-[#70ba65] text-red-600">
              <Typewriter
                words={[
                  "Web Developer",
                  "SEO Expert",
                  "WordPress Developer",
                  "Graphics Designer",
                  "Digital Marketer",
                ]}
                cursorColor="red"
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </div>
        <HorizontalRowDotted />
        <div className="flex justify-center py-5">
          <div className="flex flex-row gap-3">
            <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
            <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
            <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
            <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
          </div>
        </div>
        <HorizontalRowDotted />
      </div>
    </div>
  );
}

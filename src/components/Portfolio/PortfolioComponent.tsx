"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PortfolioComponent() {
  const category = ["All", "Web Development", "Data Science"];
  const [showPostTitle, setPostTitle] = useState(false);
  return (
    <>
      <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
        <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
          <div className="w-full">
            <div className="flex flex-row items-center gap-3 justify-start w-full">
              {category.map((cat, index) => (
                <button
                  key={index}
                  className="bg-[#f4f5f7] text-sm dark:bg-[#02162b] px-5 cursor-pointer py-2 rounded-2xl hover:bg-[#70ba65] dark:hover:bg-[#70ba65] transition-all duration-300 text-[#00283A] dark:text-white font-semibold"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <div
          className=" relative rounded-lg shadow-lg overflow-hidden"
          onMouseEnter={() => setPostTitle(true)}
          onMouseLeave={() => setPostTitle(false)}
        >
          <Image
            src="/assets/images/banner.jpg"
            alt="Banner.jpg"
            width={500}
            height={0}
            className="w-full rounded"
          />
          <div
            className={`absolute -bottom-16 ${
              showPostTitle ? "bottom-0" : "-bottom-16"
            } bg-white rounded-b transition-all dark:bg-[#00283a] w-full items-center flex flex-row justify-between px-5 py-3`}
          >
            <h1 className="text-lg font-medium">Website Design</h1>
            <div className="w-10 h-10 rounded-full bg-[#00283a] dark:bg-white flex flex-row items-center justify-center">
              <FaArrowRight className="text-white dark:text-[#70ba65]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

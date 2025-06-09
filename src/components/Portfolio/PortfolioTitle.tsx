"use client";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PortfolioTitle() {
  const [showPostTitle, setPostTitle] = useState(false);

  return (
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
  );
}

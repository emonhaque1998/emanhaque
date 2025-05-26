"use client";

import { useState } from "react";
import Image from "next/image";

export default function ShowAbailable() {
  const [showAbailable, setAvailable] = useState(false);
  return (
    <>
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
    </>
  );
}

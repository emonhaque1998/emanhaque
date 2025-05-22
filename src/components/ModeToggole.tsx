"use client";

import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const modeToggleHandler = (e: any) => {
    e.target.checked === true ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent rendering until mounted on client
  if (!mounted) return null;

  return (
    <div className="flex flex-row items-center gap-1">
      <div>
        <MdLightMode
          className={`${
            theme === "light" ? "text-[#70ba65]" : "text-[#7c8b92]"
          }`}
        />
      </div>
      <div>
        <label className="cursor-pointer">
          <input
            type="checkbox"
            onChange={modeToggleHandler}
            checked={theme === "dark" ? true : false}
            value=""
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-[#f4f5f7] peer-focus:outline-none rounded-full peer dark:bg-[#02162b] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-[#70ba65] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#fcfcfe] dark:after:bg-[#02162b] after:border-[#70ba65] after:border-3 after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#02162b] dark:peer-checked:bg-[#02162b] transition-all"></div>
        </label>
      </div>
      <div>
        <MdDarkMode
          className={`${
            theme === "dark" ? "text-[#70ba65]" : "text-[#7c8b92]"
          }`}
        />
      </div>
    </div>
  );
}

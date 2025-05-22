"use client";
import ModeToggle from "@/components/ModeToggole";
import * as motion from "motion/react-client";
import MenuButtonForM from "@/components/MenuBUttonForM";
import MobileNavMenu from "@/components/MobileNavMenu";
import { useState } from "react";

export default function Header() {
  const [showNavMenu, setNavMenu] = useState(false);
  const navChangeHandler = () => {
    setNavMenu(!showNavMenu);
  };
  return (
    <header className="bg-[#fcfcfe] dark:bg-[#00283a] rounded-xl max-md:rounded-none sticky max-md:relative top-0 z-20">
      <div className="py-6 max-md:py-8 px-20 max-md:px-5">
        <div className="flex flex-row justify-between items-center">
          <div className="logo">
            <h1 className="text-black dark:text-white">Eman Haque</h1>
          </div>
          <div className="flex flex-row items-center gap-10 max-md:gap-5">
            <MobileNavMenu show={showNavMenu} />

            <ModeToggle />
            <div className="max-md:hidden">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="text-white dark:bg-[#70ba65] bg-[#70ba65] px-5 py-2 rounded-full cursor-pointer"
              >
                Download Cv
              </motion.button>
            </div>
            <MenuButtonForM
              getMenuShowData={navChangeHandler}
              sendShowData={showNavMenu}
            />
          </div>
        </div>
      </div>
    </header>
  );
}

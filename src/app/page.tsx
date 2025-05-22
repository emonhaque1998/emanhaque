"use client";
import ModeToggle from "@/components/ModeToggole";
import * as motion from "motion/react-client";
import MenuButtonForM from "@/components/MenuBUttonForM";
import MobileNavMenu from "@/components/MobileNavMenu";
import { useState } from "react";

export default function Home() {
  const [showNavMenu, setNavMenu] = useState(false);
  const navChangeHandler = () => {
    setNavMenu(!showNavMenu);
  };
  return (
    <div className="container mx-auto relative">
      <header className="bg-[#fcfcfe] dark:bg-[#00283a] rounded-xl sticky top-5 z-20">
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
      <div className="dark:bg-[#00283a] w-1/3 sticky top-0">
        <h1>Eman H.</h1>
      </div>
      <div className="px-10 -z-10 -mt-24">
        <div className="relative h-screen bg-no-repeat z-10 bg-cover bg-[url(https://img.freepik.com/free-photo/green-park-view_1417-1494.jpg?semt=ais_hybrid&w=740)]">
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          <div className="flex flex-col items-center justify-center h-full z-40">
            <h1 className="text-white">Discover my art space!</h1>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

"use client";
import ModeToggle from "@/components/ModeToggole";
import * as motion from "motion/react-client";
import MenuButtonForM from "@/components/MenuBUttonForM";
import MobileNavMenu from "@/components/MobileNavMenu";
import { useState } from "react";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa";

export default function Header() {
  const [showNavMenu, setNavMenu] = useState(false);
  const navChangeHandler = () => {
    setNavMenu(!showNavMenu);
  };
  return (
    <header className="bg-[#fcfcfe] dark:bg-[#00283a] rounded-xl max-md:rounded-none sticky max-md:relative top-0 z-50">
      <div className="py-6 max-md:py-8 px-20 max-md:px-5">
        <div className="flex flex-row justify-between items-center">
          <div className="logo">
            <h1 className="text-black dark:text-white">Eman Haque</h1>
          </div>
          <div className="flex flex-row items-center gap-10 max-md:gap-5">
            <MobileNavMenu show={showNavMenu} />

            <ModeToggle />
            <div className="max-md:hidden">
              <Button text="Download CV">
                <FaArrowDown />
              </Button>
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

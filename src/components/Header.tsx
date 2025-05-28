"use client";
import ModeToggle from "@/components/ModeToggole";
import * as motion from "motion/react-client";
import MenuButtonForM from "@/components/MenuBUttonForM";
import MobileNavMenu from "@/components/MobileNavMenu";
import { useState } from "react";
import Button from "./Button";
import { FaArrowDown } from "react-icons/fa";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import Link from "next/link";

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
              {/* <Button text="Download CV">
                <FaArrowDown />
              </Button> */}
              <SignedOut>
                <div className="flex flex-row gap-3">
                  <SignInButton mode="modal">
                    <div className="bg-black text-white px-3 cursor-pointer flex items-center justify-center shadow py-2 rounded-full">
                      <span className="text-sm">Sign In</span>
                    </div>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <div className="bg-black text-white px-3 cursor-pointer flex items-center justify-center shadow py-2 rounded-full">
                      <span className="text-sm">Sign In</span>
                    </div>
                  </SignUpButton>
                </div>
              </SignedOut>
              <SignedIn>
                <div className="flex flex-row gap-3 items-center">
                  <div>
                    <Link
                      href="/user"
                      className="px-2 py-1 dark:bg-black/20 cursor-pointer rounded-lg"
                    >
                      Dashboard
                    </Link>
                  </div>
                  <div className="flex items-center justify-center">
                    <UserButton />
                  </div>
                </div>
              </SignedIn>
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

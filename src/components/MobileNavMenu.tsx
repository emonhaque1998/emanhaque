"use client";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react"


const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function MobileNavMenu({show} : {show: boolean}) {
  return (
    <div className="max-md:w-full">
      <AnimatePresence>
        {show && (
          <motion.ul initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.2 }} 
        className={`text-[#00283A] max-md:w-[90%] max-md:rounded-b-2xl max-md:top-20 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2 max-md:px-10 max-md:py-5 max-md:dark:bg-[#00283a] max-md:bg-[#fcfcfe] dark:text-[#dedee0] flex flex-row gap-5 max-md:flex-col max-md:absolute max-md:z-50 max-md:shadow`}>
          {navItems.map((item) => {
            return (
              <li key={item.name} className="max-md:py-2">
                {item.name}
              </li>
            );
          })}
        </motion.ul>
        ) }
      </AnimatePresence>

      <ul className={`text-[#dedee0] dark:text-[#00283A] flex flex-row gap-5 max-md:hidden`}>
          {navItems.map((item) => {
            return (
              <li key={item.name} className="text-[#00283A] dark:text-white">
                {item.name}
              </li>
            );
          })}
        </ul>
    </div>
  );
}

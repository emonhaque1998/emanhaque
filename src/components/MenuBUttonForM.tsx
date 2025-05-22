"use client";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";

export default function MenuButtonForM({
  getMenuShowData,
  sendShowData,
}: {
  getMenuShowData: () => void;
  sendShowData: boolean;
}) {
  return (
    <div className="hidden max-md:block">
      <AnimatePresence mode="wait">
        {sendShowData ? (
          <motion.div
            key="Menu"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
          >
            <IoMdClose
              className="text-[#00283a] dark:text-white text-3xl"
              onClick={getMenuShowData}
            />
          </motion.div>
        ) : (
          <motion.div
            key="close"
            initial={{ opacity: 0, rotate: 90 }}
            animate={{ opacity: 1, rotate: 0 }}
            exit={{ opacity: 0, rotate: -90 }}
            transition={{ duration: 0.2 }}
          >
            <IoMenu
              className="text-[#00283a] dark:text-white text-3xl"
              onClick={getMenuShowData}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

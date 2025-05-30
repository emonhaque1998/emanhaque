import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";

export default function BlogManagement() {
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <MainContainer>
            <h1 className="text-[#00283a] dark:text-white text-lg font-bold">
              All Blog
            </h1>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

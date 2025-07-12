'use client';

import { motion } from 'motion/react';

export function ButtonTwoMotionWrapper({ children, classProperty }: { children: React.ReactNode, classProperty?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className={`${classProperty} flex flex-row items-center gap-2 justify-center dark:text-white text-black dark:bg-[#70ba65] bg-black px-5 py-2 rounded-full cursor-pointer`}
    >
      {children}
    </motion.button>
  );
}

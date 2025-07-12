'use client';

import { motion } from 'motion/react';

export function ButtonOneMotionWrapper({ children, classProperty }: { children: React.ReactNode, classProperty?: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className={`${classProperty} flex flex-row items-center justify-center gap-2 dark:text-white text-black border-1 shadow bg-transparent px-5 py-2 rounded-full cursor-pointer`}
    >
      {children}
    </motion.button>
  );
}

'use client';

import { motion, AnimatePresence } from 'motion/react';

export function MotionWrapper({ children }: { children: React.ReactNode }) {
  return (
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
          {children}
        </motion.div>
      </AnimatePresence>
  );
}

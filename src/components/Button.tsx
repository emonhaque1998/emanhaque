import * as motion from "motion/react-client";

export default function Button({
  classProperty,
  children,
  text,
  outLine,
}: {
  classProperty?: string;
  children?: React.ReactNode;
  text: string;
  outLine?: boolean;
}) {
  return (
    <>
      {outLine ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className={`${classProperty} flex flex-row items-center justify-center gap-2 dark:text-white text-black border-1 shadow bg-transparent px-5 py-2 rounded-full cursor-pointer`}
        >
          {text} {children}
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className={`${classProperty} flex flex-row items-center gap-2 justify-center dark:text-white text-black dark:bg-[#70ba65] bg-black px-5 py-2 rounded-full cursor-pointer`}
        >
          {text} {children}
        </motion.button>
      )}
    </>
  );
}

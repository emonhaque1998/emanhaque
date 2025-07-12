"use client";
import { motion } from "motion/react";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import AllPost from "@/components/admin/AllPost";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import axios from "axios";
import { addAllPortfolio } from "@/store/portfolioSlice";

export default function AddCategory() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.portfolioSlice.data);

  useEffect(() => {
    const getPost = async () => {
      const allPost = await axios.get("/api/portfolio?take=10");
      dispatch(addAllPortfolio(allPost.data));
    };

    getPost();
  }, []);
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
              All Blogs
            </h1>
            <div className="w-full">
              <AllPost posts={posts} />
            </div>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

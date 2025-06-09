"use client";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import { useState } from "react";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addPost } from "@/store/postSlice";
import toast from "react-hot-toast";
import AllPost from "@/components/admin/AllPost";

export default function AddCategory() {
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
              <AllPost />
            </div>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

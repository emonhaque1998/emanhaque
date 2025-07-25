"use client";
import { motion } from "motion/react";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import AllPost from "@/components/admin/AllPost";
import axios from "axios";
import { addAllPost } from "@/store/postSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import AllBlogPost from "@/components/admin/AllBlogPost";

type Meta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
};

export default function AddCategory() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postSlice.data);
  const limit = 2;
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [SmallLoading, setSmallLoading] = useState(false);

  const setLoadingHandler = (loading: boolean) => {
    setSmallLoading(loading);
  };

  const setPagehandler = (page: number) => {
    setPage(page);
  };

  const getAllBlogs = () => {
    setSmallLoading(true);
    axios.get(`/api/post?page=${page}&limit=${limit}`).then((res) => {
      dispatch(addAllPost(res.data.posts));
      setMeta(res.data.meta);
      setLoading(false);
      setSmallLoading(false);
    });
  };

  useEffect(() => {
    getAllBlogs();
  }, [page]);

  const getData = () => {
    getAllBlogs();
  };
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
              <AllBlogPost
                posts={posts}
                page={page}
                meta={meta}
                setPage={setPagehandler}
                getData={getData}
                loading={SmallLoading}
                setLoadingAction={setLoadingHandler}
              />
            </div>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

"use client";
import { motion } from "motion/react";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import AllPost from "@/components/admin/AllPost";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { addAllPortfolio } from "@/store/portfolioSlice";
import { Meta } from "@/types/allTypes";
import BossLoading from "@/components/BossLoading";

export default function AddCategory() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.portfolioSlice.data);
  const limit = 2;
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [SmallLoading, setSmallLoading] = useState(false);

  const setPagehandler = (page: number) => {
    setPage(page);
  };

  const setLoadingHandler = (loading: boolean) => {
    setSmallLoading(loading);
  };

  const getAllPortfolio = () => {
    setSmallLoading(true);
    axios.get(`/api/portfolio?page=${page}&limit=${limit}`).then((res) => {
      dispatch(addAllPortfolio(res.data.portfolio));
      setMeta(res.data.meta);
      setLoading(false);
      setSmallLoading(false);
    });
  };

  useEffect(() => {
    getAllPortfolio();
  }, [page]);

  const getData = () => {
    getAllPortfolio();
  };
  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
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
                  <AllPost
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
      )}
    </>
  );
}

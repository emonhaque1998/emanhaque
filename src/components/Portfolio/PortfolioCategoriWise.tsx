"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addAllPortfolio } from "@/store/portfolioSlice";
import { PortfolioType } from "@/types/allTypes";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import MainContainer from "../MainContainer";
import { addSingleCategory } from "@/store/categorySlice";

type Meta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
};

export default function PortfolioCategoriWise({
  catSlug,
}: {
  catSlug: string;
}) {
  const [showPostTitle, setPostTitle] = useState(false);
  const portfolios = useAppSelector((state) => state.portfolioSlice.data);
  const category = useAppSelector(
    (state) => state.categorySlice.singleCategory
  );
  const limit = 2;
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/portfolio/${catSlug}?page=${page}&limit=${limit}`)
      .then((res) => {
        console.log(res.data);
        dispatch(addAllPortfolio(res.data.category.portfolio));
        dispatch(addSingleCategory(res.data.category));
        setMeta(res.data.meta);
        setLoading(false);
      });
  }, [page]);
  return (
    <>
      <div className="w-full">
        <MainContainer>
          <h1 className="text-center">{category?.categoryName}</h1>
        </MainContainer>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        {portfolios &&
          portfolios.map((portfolio, index) => (
            <Link
              key={index}
              href={`/portfolio/${portfolio.category.categorySlug}/${portfolio.slug}`}
            >
              <div
                className="cursor-pointer relative rounded-lg shadow-lg overflow-hidden"
                onMouseEnter={() => setPostTitle(true)}
                onMouseLeave={() => setPostTitle(false)}
              >
                <Image
                  src={portfolio.image}
                  alt={portfolio.title}
                  width={500}
                  height={0}
                  className="w-full rounded"
                />
                <div
                  className={`absolute -bottom-16 ${
                    showPostTitle ? "bottom-0" : "-bottom-16"
                  } bg-white cursor-pointer rounded-b transition-all dark:bg-[#00283a] w-full items-center flex flex-row justify-between px-5 py-3`}
                >
                  <h1 className="text-lg font-medium">{portfolio.title}</h1>
                  <div className="w-10 h-10 rounded-full bg-[#00283a] dark:bg-white flex flex-row items-center justify-center">
                    <FaArrowRight className="text-white dark:text-[#70ba65]" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <div className="mt-6 flex justify-center items-center space-x-2">
        <button
          className="px-3 py-1 bg-[#70ba65] dark:bg-black/50 rounded disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>

        {Array.from({ length: meta?.totalPages || 0 }, (_, i) => (
          <button
            key={i + 1}
            className={`px-3 py-1 rounded ${
              page === i + 1
                ? "bg-[#70ba65] dark:bg-black/50 text-white"
                : "bg-gray-200/30"
            }`}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 bg-[#70ba65] dark:bg-black/50 rounded disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === (meta?.totalPages || 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

"use client";
import axios from "axios";
import PortfolioTitle from "./PortfolioTitle";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addAllCategory } from "@/store/categorySlice";
import { addAllPortfolio } from "@/store/portfolioSlice";
import Link from "next/link";

export default function PortfolioComponent() {
  const categoris = useAppSelector((state) => state.categorySlice.data);
  const portfolios = useAppSelector((state) => state.portfolioSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getPortfolio = async () => {
      const portfolioRes = await axios.get("/api/portfolio?take=10");

      const categoryRes = await axios.get(
        "/api/post/category/have-portfolio-category"
      );
      dispatch(addAllPortfolio(portfolioRes.data));
      dispatch(addAllCategory(categoryRes.data));
    };

    getPortfolio();
  }, []);
  return (
    <>
      <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
        <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
          <div className="w-full">
            <div className="flex flex-row items-center gap-3 justify-start w-full">
              {categoris &&
                categoris.map((category, index) => (
                  <Link
                    href={`/portfolio/${category.categorySlug}`}
                    key={index}
                    className="bg-[#f4f5f7] text-sm dark:bg-[#02162b] px-5 cursor-pointer py-2 rounded-2xl hover:bg-[#70ba65] dark:hover:bg-[#70ba65] transition-all duration-300 text-[#00283A] dark:text-white font-semibold"
                  >
                    {category.categoryName}
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <PortfolioTitle portfolios={portfolios} />
      </div>
    </>
  );
}

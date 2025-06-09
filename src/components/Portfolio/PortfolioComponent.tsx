"use client";
import axios from "axios";
import PortfolioTitle from "./PortfolioTitle";
import { useEffect } from "react";

export default function PortfolioComponent() {
  const category = ["All", "Web Development", "Data Science"];

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("/api/portfolio?take=10");
    };

    getData();
  }, []);
  return (
    <>
      <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
        <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
          <div className="w-full">
            <div className="flex flex-row items-center gap-3 justify-start w-full">
              {category.map((cat, index) => (
                <button
                  key={index}
                  className="bg-[#f4f5f7] text-sm dark:bg-[#02162b] px-5 cursor-pointer py-2 rounded-2xl hover:bg-[#70ba65] dark:hover:bg-[#70ba65] transition-all duration-300 text-[#00283A] dark:text-white font-semibold"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <PortfolioTitle />
      </div>
    </>
  );
}

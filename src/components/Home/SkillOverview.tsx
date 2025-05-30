"use client";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import { FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export default function SkillOverview() {
  const banner = useAppSelector((state) => state.bannerSlice.data);
  return (
    <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
      <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
        <div className="flex flex-row justify-center gap-1 items-center">
          <span className="text-[#00283a] dark:text-white text-2xl font-bold">
            {banner?.projectCount || 0}
          </span>
          <span className="text-[#70ba65] text-md">
            <FaPlus />
          </span>
        </div>
        <HorizontalRowDotted padding="py-5" />

        <h2 className="text-center uppercase font-medium text-sm">
          Completed <br /> projects
        </h2>
      </div>
      <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
        <div className="flex flex-row justify-center gap-1 items-center">
          <span className="text-[#00283a] dark:text-white text-2xl font-bold">
            {banner?.coustomerCount || 0}
          </span>
          <span className="text-[#70ba65] text-md">
            <FaPlus />
          </span>
        </div>
        <HorizontalRowDotted padding="py-5" />

        <h2 className="text-center uppercase font-medium text-sm">
          Happy <br /> customers
        </h2>
      </div>
      <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-center">
        <div className="flex flex-row justify-center gap-1 items-center">
          <span className="text-[#00283a] dark:text-white text-2xl font-bold">
            {banner?.awardsCount || 0}
          </span>
          <span className="text-[#70ba65] text-md">
            <FaPlus />
          </span>
        </div>
        <HorizontalRowDotted padding="py-5" />

        <h2 className="text-center uppercase font-medium text-sm">
          Honors and <br /> Awards
        </h2>
      </div>
    </div>
  );
}

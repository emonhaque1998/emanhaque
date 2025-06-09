"use client";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import { FaPlus } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CountDecoration from "../CountDecoration";

export default function SkillOverview() {
  const banner = useAppSelector((state) => state.bannerSlice.data);
  return (
    <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
      <CountDecoration
        title="Completed projects"
        count={banner?.projectCount || 0}
      />
      <CountDecoration
        title="Happy customers"
        count={banner?.coustomerCount || 0}
      />
      <CountDecoration
        title="Honors and Awards"
        count={banner?.awardsCount || 0}
      />
    </div>
  );
}

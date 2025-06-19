"use client";
import { useEffect } from "react";
import TitleHeader from "../TitleHeader";
import { GiWorld } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addAllService } from "@/store/serviceSlice";

export default function MyService() {
  const services = useAppSelector((state) => state.serviceSlice.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get("/api/service").then((res) => {
      if (res.status === 200) {
        dispatch(addAllService(res.data));
      }
    });
  }, []);
  return (
    <>
      <div className="w-full mt-5">
        <TitleHeader
          title="My Service"
          secNumber={3}
          titleWidth="w-3/12 max-md:w-4/12"
        />
        <div className="mt-5 grid-cols-2 max-md:grid-cols-1 grid gap-3">
          {services?.map((item, index) => (
            <div className="dark:bg-[#00283a] bg-white flex-1 px-10 py-10 rounded-lg flex flex-col gap-3">
              <GiWorld className="text-5xl" />
              <h2 className="text-xl font-bold">
                {item.category?.categoryName}
              </h2>
              <p>{item.shortDescription}</p>
              <button className="dark:text-[#70ba65] text-red-600 hover:gap-2 transition-all cursor-pointer flex flex-row gap-1 items-center">
                Order Now <IoIosArrowRoundForward className="text-xl" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

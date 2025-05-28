"use client";

import Button from "@/components/Button";
import axios from "axios";
import { useEffect } from "react";
import { FaPlay } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addBanner } from "@/store/bannerSlice";

export default function Banner() {
  const dispatch = useAppDispatch();
  const banner = useAppSelector((state) => state.bannerSlice);
  useEffect(() => {
    const getBanner = async () => {
      const banner = await axios.get("/api/banner");
      if (banner.status === 200) {
        dispatch(
          addBanner({
            title: banner.data.title,
            slogan: banner.data.slogan,
            url: banner.data.url,
          })
        );
      } else {
        console.error("Failed to fetch banner data");
      }
    };

    getBanner();
  }, []);
  return (
    <div className="px-10 max-md:px-0 w-full absolute max-md:static top-20">
      <div className="relative h-screen bg-no-repeat z-10 bg-cover bg-[url(https://img.freepik.com/free-photo/green-park-view_1417-1494.jpg?semt=ais_hybrid&w=740)]">
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        <div className="flex flex-col items-center justify-center h-full z-10">
          <div className="w-4/12 max-md:w-full ml-20 max-md:ml-0 max-md:px-5 flex flex-col gap-5">
            <h3 className="font-medium text-white text-left">
              {banner.slogan || "Welcome to my art space!"}
            </h3>
            <h1 className="text-5xl font-bold text-white">
              {banner.title || "My Art Portfolio"}
            </h1>
            <div className="mt-5">
              <Button
                text="Video Resume"
                outLine={true}
                classProperty="border-2 w-1/2 max-md:w-2/3"
              >
                <FaPlay />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

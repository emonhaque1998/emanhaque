"use client";
import MainContainer from "@/components/MainContainer";
import TopDivision from "@/components/TopDivision";
import { use, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { getSinglePost } from "@/action/frontend/blog";

export default function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  useEffect(() => {
    const post = async () => {
      await getSinglePost(slug);
    };

    post();
  }, []);
  return (
    <>
      <TopDivision>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full gap-10">
            <div>
              <SlCalender className="text-2xl" />
            </div>
            <div>
              <h2 className="text-sm font-medium">September 24, 2020</h2>
            </div>
          </div>
        </MainContainer>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full gap-10">
            <div>
              <FaRegClock className="text-2xl" />
            </div>
            <div>
              <h2 className="text-sm font-medium">September 24, 2020</h2>
            </div>
          </div>
        </MainContainer>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full gap-10">
            <div>
              <RxAvatar className="text-2xl" />
            </div>
            <div>
              <h2 className="text-sm font-medium">September 24, 2020</h2>
            </div>
          </div>
        </MainContainer>
      </TopDivision>
    </>
  );
}

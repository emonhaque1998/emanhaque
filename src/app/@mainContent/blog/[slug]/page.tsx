"use client";
import MainContainer from "@/components/MainContainer";
import TopDivision from "@/components/TopDivision";
import { use, useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addPost } from "@/store/singlePost";
import { format } from "date-fns";
import axios from "axios";

export default function SinglePost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = useAppSelector((state) => state.singlePostSlice.data);
  const dispatch = useAppDispatch();

  const { slug } = use(params);

  useEffect(() => {
    const post = async () => {
      const res = await axios.get(`/api/post/${slug}`);
      if (res.data.success) {
        dispatch(addPost(res.data.post));
      }
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
              <h2 className="text-sm font-medium">
                {post && format(new Date(post.createdAt), "dd-MMM-yyyy")}
              </h2>
            </div>
          </div>
        </MainContainer>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full gap-10">
            <div>
              <FaRegClock className="text-2xl" />
            </div>
            <div>
              <h2 className="text-sm font-medium">
                {post && format(new Date(post.createdAt), "hh:mm a")}
              </h2>
            </div>
          </div>
        </MainContainer>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full gap-10">
            <div>
              <RxAvatar className="text-2xl" />
            </div>
            <div>
              <h2 className="text-sm font-medium">{post && post.user?.name}</h2>
            </div>
          </div>
        </MainContainer>
      </TopDivision>
    </>
  );
}

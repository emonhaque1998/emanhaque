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
import Link from "next/link";
import { redirect } from "next/navigation";

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
        console.log(res.data);
      }
    };
    post();
  }, []);
  return (
    <>
      {post && (
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
                  <h2 className="text-sm font-medium">
                    {post && post.user?.name}
                  </h2>
                </div>
              </div>
            </MainContainer>
          </TopDivision>
          <div className="mt-10">
            <MainContainer>
              <div
                className="custom-tiptap-output flex flex-col justify-center gap-2"
                dangerouslySetInnerHTML={{
                  __html: post && post.content ? post.content : "",
                }}
              />
              <div className="mt-10">
                <span className="font-medium">
                  Posted in{" "}
                  <Link href={post.category.categorySlug}>
                    <span className="text-[#70ba65]">
                      {post.category.categoryName}
                    </span>
                  </Link>{" "}
                  by <span className="text-[#70ba65]">{post.user.name}</span>
                </span>
              </div>
            </MainContainer>
          </div>
        </>
      )}
    </>
  );
}

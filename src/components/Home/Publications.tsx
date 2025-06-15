"use client";

import Image from "next/image";
import TitleHeader from "../TitleHeader";
import HorizontalRowDotted from "../HorizontalRowDotted";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";
import axios from "axios";
import { addAllPost } from "@/store/postSlice";
import { format } from "date-fns";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

type Meta = {
  page: number;
  limit: number;
  totalPages: number;
  total: number;
};

export default function Publications() {
  const allPost = useAppSelector((state) => state.postSlice.data);
  const searchParams = useSearchParams();
  const router = useRouter();
  const page = parseInt(searchParams.get("page") || "1");
  const limit = 2;
  const dispatch = useAppDispatch();

  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    // setLoading(true);
    const res = await axios.get(`/api/post?page=${page}&limit=${limit}`);
    console.log(res.data.posts);
    dispatch(addAllPost(res.data.posts));
    setMeta(res.data.meta);
    setLoading(false);
  };

  useEffect(() => {
    fetchPosts();
  }, [page]);

  const goToPage = (p: number) => {
    router.push(`/blog?page=${p}`);
  };
  return (
    <>
      <div>
        <div className="mt-5">
          <TitleHeader
            title="Latest Publications"
            titleWidth="w-5/12"
            secNumber={6}
          />
          <div className="mt-5 grid grid-cols-2 max-md:grid-cols-1 gap-3">
            {allPost &&
              allPost.map((post, index) => {
                return (
                  <div
                    key={index}
                    className="bg-white dark:bg-[#00283a] pb-5 w-full flex-col items-center gap-4 rounded-lg flex justify-center"
                  >
                    <div className="flex flex-col gap-5 w-full">
                      <div className="">
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.image}
                            width={600}
                            height={0}
                            alt="blog banner"
                            className="w-full rounded-lg h-60 object-cover"
                          />
                        </Link>
                      </div>
                      <div className="px-10">
                        <div className="flex flex-row gap-2">
                          <span className="text-gray-500 uppercase">
                            {post.category.categoryName}
                          </span>
                        </div>
                        <div>
                          <h1 className="text-xl font-bold">{post.title}</h1>
                        </div>
                        <HorizontalRowDotted />
                        <div>
                          <span className="text-gray-500">
                            {format(new Date(post.createdAt), "dd-MM-yyyy")}{" "}
                            <span className="text-red-600 dark:text-[#70ba65]">
                              {post.user.name}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="mt-6 flex justify-center items-center space-x-2">
              <button
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                onClick={() => goToPage(page - 1)}
                disabled={page === 1}
              >
                Prev
              </button>

              {Array.from({ length: meta?.totalPages || 0 }, (_, i) => (
                <button
                  key={i + 1}
                  className={`px-3 py-1 rounded ${
                    page === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                  }`}
                  onClick={() => goToPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}

              <button
                className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                onClick={() => goToPage(page + 1)}
                disabled={page === (meta?.totalPages || 1)}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

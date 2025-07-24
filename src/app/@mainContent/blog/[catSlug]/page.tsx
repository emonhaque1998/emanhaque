"use client";
import CategoryItems from "@/components/Blog/CategoryItems";
import BossLoading from "@/components/BossLoading";
import Publications from "@/components/Home/Publications";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import MainContainer from "@/components/MainContainer";
import TopDivision from "@/components/TopDivision";
import { addSingleCategory } from "@/store/categorySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import { FaArrowRight } from "react-icons/fa";

const categoryItems = [
  {
    name: "Design",
    postCount: 5,
    slug: "design",
  },
  {
    name: "Development",
    postCount: 10,
    slug: "development",
  },
  {
    name: "Marketing",
    postCount: 3,
    slug: "marketing",
  },
];

export default function CatWiseBlog({
  params,
}: {
  params: Promise<{ slug: string; catSlug: string }>;
}) {
  const { catSlug } = use(params);
  const [loading, setLoading] = useState(true);
  const category = useAppSelector(
    (state) => state.categorySlice.singleCategory
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    axios.get(`/api/category/${catSlug}`).then((res) => {
      dispatch(addSingleCategory(res.data));
      setLoading(false);
    });
  }, []);
  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
        <>
          <TopDivision>
            <MainContainer>
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-xl font-bold">
                    Category: {category?.categoryName}
                  </h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                    {Array.isArray(category?.post) ? category.post.length : 0}{" "}
                    Posts
                  </span>
                </div>
              </div>
            </MainContainer>
          </TopDivision>
          <Publications categorySlug={catSlug} />
        </>
      )}
    </>
  );
}

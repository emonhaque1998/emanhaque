"use client";
import CategoryItems from "@/components/Blog/CategoryItems";
import BossLoading from "@/components/BossLoading";
import Publications from "@/components/Home/Publications";
import TopDivision from "@/components/TopDivision";
import { addAllCategory } from "@/store/categorySlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { useState, useEffect } from "react";

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

export default function Blog() {
  const [loading, setLoading] = useState(true);
  const categoris = useAppSelector((state) => state.categorySlice.data);
  const dispatch = useAppDispatch();
  useEffect(() => {
    axios.get("/api/post/category").then((res) => {
      dispatch(addAllCategory(res.data.allCategory));
    });
    setLoading(false);
  }, []);
  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
        <>
          <TopDivision>
            <CategoryItems categoryItems={categoris} />
          </TopDivision>
          <Publications />
        </>
      )}
    </>
  );
}

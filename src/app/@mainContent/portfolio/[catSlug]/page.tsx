"use client";
import Footer from "@/components/Footer";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import PortfolioComponent from "@/components/Portfolio/PortfolioComponent";
import axios from "axios";
import { use, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useDispatch } from "react-redux";
import { addSingleCategory } from "@/store/categorySlice";
import PortfolioTitle from "@/components/Portfolio/PortfolioTitle";
import { PortfolioType } from "@/types/allTypes";
import MainContainer from "@/components/MainContainer";

export default function CategoryPortfolio({
  params,
}: {
  params: Promise<{ catSlug: string }>;
}) {
  const { catSlug } = use(params);
  const category = useAppSelector(
    (state) => state.categorySlice.singleCategory
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/api/portfolio/${catSlug}`);
      dispatch(addSingleCategory(res.data));
    };

    getData();
  }, []);

  return (
    <>
      <div className="w-full">
        <MainContainer>
          <h1 className="text-center">{category?.categoryName}</h1>
        </MainContainer>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 max-md:grid-cols-1">
        <PortfolioTitle portfolios={category?.portfolio} />
      </div>
      <HorizontalRowDotted />
      <Footer />
    </>
  );
}

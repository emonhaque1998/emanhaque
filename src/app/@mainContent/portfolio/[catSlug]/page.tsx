"use client";
import Footer from "@/components/Footer";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addSingleCategory } from "@/store/categorySlice";
import { PortfolioType } from "@/types/allTypes";
import MainContainer from "@/components/MainContainer";
import BossLoading from "@/components/BossLoading";
import PortfolioCategoriWise from "@/components/Portfolio/PortfolioCategoriWise";

export default function CategoryPortfolio({
  params,
}: {
  params: Promise<{ catSlug: string }>;
}) {
  const { catSlug } = use(params);
  const category = useAppSelector(
    (state) => state.categorySlice.singleCategory
  );
  const dispatch = useAppDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <BossLoading />
      ) : (
        <>
          <PortfolioCategoriWise catSlug={catSlug} />
          <HorizontalRowDotted />
          <Footer />
        </>
      )}
    </>
  );
}

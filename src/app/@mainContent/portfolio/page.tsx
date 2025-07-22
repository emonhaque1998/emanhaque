"use client";
import BossLoading from "@/components/BossLoading";
import Footer from "@/components/Footer";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import PortfolioComponent from "@/components/Portfolio/PortfolioComponent";
import { useEffect, useState } from "react";

export default function Portfolio() {
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
          <PortfolioComponent />
          <HorizontalRowDotted />
          <Footer />
        </>
      )}
    </>
  );
}

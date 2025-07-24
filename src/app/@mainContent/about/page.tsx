"use client";
import LanguageSkill from "@/components/About/LanguageSkill";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import BossLoading from "@/components/BossLoading";

export default function About() {
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
          <LanguageSkill />
          <HorizontalRowDotted />
          <Footer />
        </>
      )}
    </>
  );
}

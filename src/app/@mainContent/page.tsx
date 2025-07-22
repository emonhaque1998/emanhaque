"use client";
import Footer from "@/components/Footer";
import MyService from "@/components/Home/MyService";
import MyStory from "@/components/Home/MyStory";
import PricePlan from "@/components/Home/PricePlan";
import SkillOverview from "@/components/Home/SkillOverview";
import Testimonials from "@/components/Home/Testimonials";
import VideoResume from "@/components/Home/VideoResume";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import PublicationsLimited from "@/components/Home/PublicationsLimited";
import { useEffect, useState } from "react";
import BossLoading from "@/components/BossLoading";

export default function MainContent() {
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
          <SkillOverview />
          <MyStory />
          <VideoResume />
          <MyService />
          <PricePlan />
          <Testimonials />
          <PublicationsLimited />
          <HorizontalRowDotted />
          <Footer />
        </>
      )}
    </>
  );
}

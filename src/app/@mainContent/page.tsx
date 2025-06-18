import Footer from "@/components/Footer";
import MyService from "@/components/Home/MyService";
import MyStory from "@/components/Home/MyStory";
import PricePlan from "@/components/Home/PricePlan";
import SkillOverview from "@/components/Home/SkillOverview";
import Testimonials from "@/components/Home/Testimonials";
import VideoResume from "@/components/Home/VideoResume";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";
import PublicationsLimited from "@/components/Home/PublicationsLimited";

export default function MainContent() {
  return (
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
  );
}

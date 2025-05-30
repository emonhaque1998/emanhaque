import Footer from "@/components/Footer";
import MyService from "@/components/Home/MyService";
import MyStory from "@/components/Home/MyStory";
import PricePlan from "@/components/Home/PricePlan";
import Publications from "@/components/Home/Publications";
import SkillOverview from "@/components/Home/SkillOverview";
import Testimonials from "@/components/Home/Testimonials";
import VideoResume from "@/components/Home/VideoResume";
import HorizontalRowDotted from "@/components/HorizontalRowDotted";

export default function MainContent() {
  return (
    <>
      <SkillOverview />
      <MyStory />
      <VideoResume />
      <MyService />
      <PricePlan />
      <Testimonials />
      <Publications take={2} />
      <HorizontalRowDotted />
      <Footer />
    </>
  );
}

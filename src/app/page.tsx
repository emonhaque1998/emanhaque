import MyService from "@/components/Home/MyService";
import MyStory from "@/components/Home/MyStory";
import PricePlan from "@/components/Home/PricePlan";
import SkillOverview from "@/components/Home/SkillOverview";
import VideoResume from "@/components/Home/VideoResume";

export default function Home() {
  return (
    <>
      <SkillOverview />
      <MyStory />
      <VideoResume />
      <MyService />
      <PricePlan />
    </>
  );
}

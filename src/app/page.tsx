import MyStory from "@/components/Home/MyStory";
import SkillOverview from "@/components/Home/SkillOverview";
import VideoResume from "@/components/Home/VideoResume";

export default function Home() {
  return (
    <>
      <SkillOverview />
      <MyStory />
      <VideoResume />
    </>
  );
}

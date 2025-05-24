import ImageSlider from "../ImageSlider";
import TitleHeader from "../TitleHeader";

const images = ["assets/images/banner.jpg", "assets/images/gang.jpg"];

const info = [
  {
    name: "Eman Haque",
    image: "/assets/images/banner.jpg",
    disignation: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    name: "Monir Haque",
    image: "/assets/images/banner.jpg",
    disignation: "Software Engineer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export default function Testimonials() {
  return (
    <>
      <div className="mt-5">
        <TitleHeader title="Testimonials" secNumber={5} />

        <div>
          <ImageSlider information={info} />
        </div>
      </div>
    </>
  );
}

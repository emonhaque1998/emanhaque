import { FaChevronCircleRight } from "react-icons/fa";

const items = [
  "Photoshop",
  "Sketch",
  "Figma",
  "Gulp",
  "Sass",
  "Bootstrap",
  "React js",
  "Vue js",
];

export default function Knowladge({}: {}) {
  return (
    <>
      <ul className="grid grid-cols-3 gap-2 w-full">
        {items.map((item, index) => (
          <li key={index} className="flex flex-row gap-2 items-center">
            <FaChevronCircleRight className="text-sm text-[#00283a] dark:text-[#70ba65]" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

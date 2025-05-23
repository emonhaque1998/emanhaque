import Image from "next/image";
import TitleHeader from "../TitleHeader";
import { FaPlay } from "react-icons/fa";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
  width: "100px",
  height: "auto",
};

export default function VideoResume() {
  return (
    <>
      <div className="mt-10">
        <TitleHeader
          title="Video resume"
          secNumber={2}
          titleWidth="w-3/12 max-md:w-5/12"
        />
        <div className="relative w-full mt-5">
          <span className="absolute inline-flex h-14 w-14 animate-ping top-1/2 left-1/2 transform -translate-x-1/2 z-10 -translate-y-1/2 rounded-full bg-[#70ba65] opacity-75"></span>
          <span className="absolute top-1/2 left-1/2 inline-flex size-3 h-14 w-14 rounded-full transform -translate-x-1/2 z-20 -translate-y-1/2 bg-[#70ba65]">
            <FaPlay className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white" />
          </span>
          <Image
            src="/assets/images/banner.jpg"
            width="500"
            height={0}
            className=" object-cover object-top rounded-lg"
            style={{ width: "100%", height: "350px" }}
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

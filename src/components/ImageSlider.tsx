"use client";

import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

interface ImageInfo {
  name: string;
  image: string;
  disignation: string;
  description: string;
}

interface ImageSliderProps {
  information: ImageInfo[];
}

export default function ImageSlider({ information }: ImageSliderProps) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const [showNavigation, setNavigation] = useState(false);

  useEffect(() => {
    // Wait until refs are ready
    setSwiperReady(true);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {swiperReady && (
        <Swiper
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          className="rounded-lg"
        >
          {information.map((src, index) => (
            <SwiperSlide
              key={index}
              onMouseEnter={() => setNavigation(true)}
              onMouseLeave={() => setNavigation(false)}
              className="mt-5"
            >
              <div className="flex flex-col items-center justify-center gap-3 px-10 py-10 rounded-lg bg-white dark:bg-[#00283a]">
                <Image
                  src={src.image}
                  width={500}
                  height={0}
                  alt={`Slide ${index}`}
                  className="h-20 w-20 object-cover rounded-full"
                />
                <div className="text-center flex flex-col items-center gap-3">
                  <div>
                    <h2 className="text-xl font-bold">{src.name}</h2>
                    <span>{src.disignation}</span>
                  </div>
                  <p>{src.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        onMouseEnter={() => setNavigation(true)}
        className={`absolute top-1/2 left-6 cursor-pointer ${
          showNavigation ? "opacity-100" : "opacity-0"
        } transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-red-500 dark:bg-black/80 dark:hover:bg-black dark:text-[#70ba65] p-2 rounded-full shadow-md`}
      >
        <FaArrowLeft />
      </button>
      <button
        ref={nextRef}
        onMouseEnter={() => setNavigation(true)}
        className={`absolute top-1/2 cursor-pointer right-6 transform -translate-y-1/2 z-10 ${
          showNavigation ? "opacity-100" : "opacity-0"
        } bg-white/80 hover:bg-white transition-all text-red-500 dark:bg-black/80 dark:hover:bg-black dark:text-[#70ba65] p-2 rounded-full shadow-md`}
      >
        <FaArrowRight />
      </button>
    </div>
  );
}

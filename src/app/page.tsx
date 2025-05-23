import Button from "@/components/Button";
import Header from "@/components/Header";
import MySelf from "@/components/MySelf";
import { FaPlay } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container mx-auto relative">
      <div className="h-8 max-md:h-0"></div>
      <Header />
      <div className="h-24 max-md:hidden"></div>
      <MySelf />
      <div className="px-10 max-md:px-0 w-full absolute top-20">
        <div className="relative h-screen bg-no-repeat z-10 bg-cover bg-[url(https://img.freepik.com/free-photo/green-park-view_1417-1494.jpg?semt=ais_hybrid&w=740)]">
          <div className="absolute inset-0 bg-black/50 -z-10"></div>
          <div className="flex flex-col items-center justify-center h-full z-40">
            <div className="w-4/12 max-md:w-full ml-30 flex flex-col gap-5">
              <h3 className="font-medium text-white text-left">
                Hi my new friend!
              </h3>
              <h1 className="text-5xl font-bold text-white">
                Discover my art space!
              </h1>
              <div className="mt-5">
                <Button
                  text="Video Resume"
                  outLine={true}
                  classProperty="border-2 w-1/2"
                >
                  <FaPlay />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

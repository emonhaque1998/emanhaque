import Header from "@/components/Header";
import MySelf from "@/components/MySelf";

export default function Home() {
  return (
    <div className="container mx-auto relative">
      <div className="h-8 max-md:h-0"></div>
      <Header />
      <div className="h-24 max-md:hidden"></div>
      <MySelf />
      <div className="px-10 max-md:px-0 w-full absolute top-0">
        <div className="relative h-screen bg-no-repeat z-10 bg-cover bg-[url(https://img.freepik.com/free-photo/green-park-view_1417-1494.jpg?semt=ais_hybrid&w=740)]">
          <div className="absolute inset-0 dark:bg-black/50 bg-[#2c3e50]/50 -z-10"></div>
          <div className="flex flex-col items-center justify-center h-full z-40">
            <h1 className="text-back dark:text-white">
              Discover my art space!
            </h1>
          </div>
        </div>
      </div>
      <div className="h-screen"></div>
    </div>
  );
}

import TitleHeader from "../TitleHeader";
import { GiWorld } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function MyService() {
  return (
    <>
      <div className="w-full mt-5">
        <TitleHeader
          title="My Service"
          secNumber={3}
          titleWidth="w-3/12 max-md:w-4/12"
        />
        <div className="mt-5 grid-cols-2 max-md:grid-cols-1 grid gap-3">
          <div className="dark:bg-[#00283a] bg-white flex-1 px-10 py-10 rounded-lg flex flex-col gap-3">
            <GiWorld className="text-5xl" />
            <h2 className="text-xl font-bold">Web Developer</h2>
            <p>
              Dolor sit amet, consectetur adipisicing elit. Delectus esse
              commodi.
            </p>
            <button className="dark:text-[#70ba65] text-red-600 hover:gap-2 transition-all cursor-pointer flex flex-row gap-1 items-center">
              Order Now <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
          <div className="dark:bg-[#00283a] bg-white flex-1 px-10 py-10 rounded-lg flex flex-col gap-3">
            <GiWorld className="text-5xl" />
            <h2 className="text-xl font-bold">Web Developer</h2>
            <p>
              Dolor sit amet, consectetur adipisicing elit. Delectus esse
              commodi.
            </p>
            <button className="dark:text-[#70ba65] text-red-600 hover:gap-2 transition-all cursor-pointer flex flex-row gap-1 items-center">
              Order Now <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
          <div className="dark:bg-[#00283a] bg-white flex-1 px-10 py-10 rounded-lg flex flex-col gap-3">
            <GiWorld className="text-5xl" />
            <h2 className="text-xl font-bold">Web Developer</h2>
            <p>
              Dolor sit amet, consectetur adipisicing elit. Delectus esse
              commodi.
            </p>
            <button className="dark:text-[#70ba65] text-red-600 hover:gap-2 transition-all cursor-pointer flex flex-row gap-1 items-center">
              Order Now <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
          <div className="dark:bg-[#00283a] bg-white flex-1 px-10 py-10 rounded-lg flex flex-col gap-3">
            <GiWorld className="text-5xl" />
            <h2 className="text-xl font-bold">Web Developer</h2>
            <p>
              Dolor sit amet, consectetur adipisicing elit. Delectus esse
              commodi.
            </p>
            <button className="dark:text-[#70ba65] text-red-600 cursor-pointer flex flex-row gap-1 hover:gap-2 transition-all items-center">
              Order Now <IoIosArrowRoundForward className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

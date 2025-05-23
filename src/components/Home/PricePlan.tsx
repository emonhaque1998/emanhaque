import Button from "../Button";
import HorizontalRowDotted from "../HorizontalRowDotted";
import TitleHeader from "../TitleHeader";
import { IoIosArrowForward } from "react-icons/io";

export default function PricePlan() {
  return (
    <>
      <div className="mt-5">
        <TitleHeader title="Price plans" secNumber={4} titleWidth="w-3/12" />
        <div className="mt-5 grid grid-cols-2 max-md:grid-cols-1 gap-3">
          <div className="relative bg-white overflow-hidden dark:bg-[#00283a] w-full px-10 flex-col items-center gap-4 py-10 rounded-lg flex justify-center">
            <div className="absolute uppercase top-5 right-[-30px] w-32 transform rotate-45 bg-red-500 text-white text-xs font-bold text-center py-1 shadow-lg">
              Popular
            </div>
            <h2 className="text-xl font-bold">Hourly Payment</h2>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-500">$ </span>
              <span className="text-4xl font-bold text-[#70ba65]">24</span>
            </div>
            <HorizontalRowDotted padding="py-2" />
            <ul className="flex flex-col gap-2">
              <li>Amet lorem.</li>
              <li>Dolor ipsum</li>
              <li className="text-gray-500">Amet lorem.</li>
              <li className="text-gray-500">Dolor ipsum</li>
            </ul>
            <Button text="Order Now" classProperty="mt-5 w-2/3">
              <IoIosArrowForward />
            </Button>
          </div>
          <div className="bg-white dark:bg-[#00283a] w-full px-10 flex-col items-center gap-4 py-10 rounded-lg flex justify-center">
            <h2 className="text-xl font-bold">Hourly Payment</h2>
            <div className="flex flex-row gap-2 items-center">
              <span className="text-gray-500">$ </span>
              <span className="text-4xl font-bold text-[#70ba65]">24</span>
            </div>
            <HorizontalRowDotted padding="py-2" />
            <ul className="flex flex-col gap-2">
              <li>Amet lorem.</li>
              <li>Dolor ipsum</li>
              <li className="text-gray-500">Amet lorem.</li>
              <li className="text-gray-500">Dolor ipsum</li>
            </ul>
            <Button text="Order Now" classProperty="mt-5 w-2/3">
              <IoIosArrowForward />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

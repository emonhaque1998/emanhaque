import Button from "../Button";
import MainContainer from "../MainContainer";
import TitleHeader from "../TitleHeader";
import { FaArrowRight } from "react-icons/fa6";

export default function GetTouch() {
  return (
    <>
      <div className="mt-5">
        <TitleHeader title="Get in touch" secNumber={2} titleWidth="w-3/12" />
        <div className="mt-5">
          <MainContainer>
            <div className="w-full flex flex-col gap-5">
              <input
                type="text"
                className="bg-[#f4f5f7] text-gray-900 text-sm rounded-lg block w-full px-5 py-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none"
                placeholder="Name"
                required
              />
              <input
                type="text"
                className="bg-[#f4f5f7] text-gray-900 text-sm rounded-lg block w-full px-5 py-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none"
                placeholder="Name"
                required
              />
              <textarea
                id="message"
                rows={4}
                className="block py-2.5 px-5 w-full text-sm text-gray-900 bg-[#f4f5f7] rounded-lg outline-none dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
                placeholder="Write your thoughts here..."
              ></textarea>

              <div className="flex flex-row items-center justify-between">
                <Button text="Send" classProperty="w-1/5">
                  <FaArrowRight className="text-sm" />
                </Button>
                <span className="text-gray-500">
                  * I promise the confidentiality of your personal information
                </span>
              </div>
            </div>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

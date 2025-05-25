import HorizontalRowDotted from "../HorizontalRowDotted";
import MainContainer from "../MainContainer";
import TopDivision from "../TopDivision";

export default function CategoryItems() {
  return (
    <>
      <TopDivision>
        <MainContainer>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-row items-center gap-3">
              <h2>Design</h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-2 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                05
              </span>
            </div>
            <HorizontalRowDotted />
          </div>
        </MainContainer>
      </TopDivision>
    </>
  );
}

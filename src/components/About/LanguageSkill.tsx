import Knowladge from "../Knowladge";
import MainContainer from "../MainContainer";
import TitleHeader from "../TitleHeader";
import TopDivision from "../TopDivision";
import ProgressBar from "./ProgressBar";
import { FaChevronCircleRight } from "react-icons/fa";

export default function LanguageSkill() {
  return (
    <>
      <TopDivision>
        <MainContainer>
          <div className="w-full flex flex-col gap-3">
            <ProgressBar name="English" percentage={70} />
            <ProgressBar name="Bangla" percentage={100} />
          </div>
        </MainContainer>
      </TopDivision>

      <div className="mt-10 flex flex-row justify-between gap-3">
        <MainContainer>
          <div className="w-full flex flex-col gap-3">
            <ProgressBar name="Html" percentage={100} />
            <ProgressBar name="CSS" percentage={100} />
            <ProgressBar name="SCSS" percentage={80} />
          </div>
        </MainContainer>
        <MainContainer>
          <div className="w-full flex flex-col gap-3">
            <ProgressBar name="jQuery" percentage={100} />
            <ProgressBar name="Vue js" percentage={100} />
            <ProgressBar name="Js" percentage={80} />
          </div>
        </MainContainer>
      </div>
      <div className="mt-10 w-full">
        <TitleHeader title="Knowledge" secNumber={2} titleWidth="w-3/12" />
        <div className="mt-5 w-full">
          <MainContainer>
            <Knowladge />
          </MainContainer>
        </div>
      </div>
    </>
  );
}

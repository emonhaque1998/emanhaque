import { MdOutlineAddIcCall } from "react-icons/md";
import MainContainer from "../MainContainer";
import TopDivision from "../TopDivision";
import { IoMailOpenOutline } from "react-icons/io5";

export default function CallWrite() {
  return (
    <>
      <TopDivision>
        <MainContainer>
          <div className="flex flex-col gap-3">
            <MdOutlineAddIcCall className="text-4xl" />
            <h1 className="text-lg font-medium">Call</h1>
            <h2>
              <span className="font-bold">Work:</span> +29 (044) 593 85 63
            </h2>
            <h2>
              <span className="font-bold">Personal:</span> +29 (044) 293 37 28
            </h2>
          </div>
        </MainContainer>
        <MainContainer>
          <div className="flex flex-col gap-3">
            <IoMailOpenOutline className="text-4xl" />
            <h1 className="text-lg font-medium">Write</h1>
            <h2>
              <span className="font-bold">Email:</span> admin@emanhaque.com
            </h2>
            <h2>
              <span className="font-bold">Instagram:</span> @emanhaque
            </h2>
          </div>
        </MainContainer>
      </TopDivision>
    </>
  );
}

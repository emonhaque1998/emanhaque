import HorizontalRowDotted from "./HorizontalRowDotted";

export default function TitleHeader() {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="w-2/12 max-md:w-4/12">
        <h2 className="text-xl font-bold max-md:text-lg">My Story</h2>
      </div>
      <HorizontalRowDotted />
      <div className="w-1/12 flex justify-end text-gray-600">01</div>
    </div>
  );
}

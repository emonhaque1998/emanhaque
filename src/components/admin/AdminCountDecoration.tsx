import HorizontalRowDotted from "../HorizontalRowDotted";

export default function AdminCountDecoration({
  title,
  count,
}: {
  title: string;
  count: number;
}) {
  return (
    <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-black/30 py-10 px-10 flex-1 flex-col justify-center flex items-center">
      <div className="flex flex-row justify-center gap-1 items-center">
        <span className="text-[#00283a] dark:text-white text-2xl font-bold">
          {count}
        </span>
      </div>
      <HorizontalRowDotted padding="py-5" />

      <h2 className="text-center uppercase font-medium text-sm text-wrap">
        {title}
      </h2>
    </div>
  );
}

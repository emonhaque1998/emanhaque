export default function ProgressBar({
  name,
  percentage,
}: {
  name: string;
  percentage: number;
}) {
  return (
    <>
      <div className="flex flex-row justify-between w-full">
        <span>{name}</span>
        <span className="text-gray-500">{percentage}%</span>
      </div>
      <div>
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
          <div
            className="bg-[#00283a] dark:bg-[#70ba65] h-1.5 rounded-full"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </>
  );
}

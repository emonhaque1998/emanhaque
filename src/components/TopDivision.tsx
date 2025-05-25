export default function TopDivision({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row w-full justify-between gap-3 max-md:flex-col max-md:-mt-20">
      {children}
    </div>
  );
}

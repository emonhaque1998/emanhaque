export default function MainContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-[#fcfcfe] rounded-lg shadow-lg dark:bg-[#00283a] py-10 px-10 flex-1 flex-col justify-center flex items-start">
        {children}
      </div>
    </>
  );
}

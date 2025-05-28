import WebsiteInformation from "@/components/admin/WebsiteInformation";

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <WebsiteInformation />
        {children}
      </div>
    </>
  );
}

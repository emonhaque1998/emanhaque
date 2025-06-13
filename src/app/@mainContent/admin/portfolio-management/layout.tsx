import WebsiteInformation from "@/components/admin/WebsiteInformation";

const navItems = [
  { name: "Add Portfolio", path: "/admin/portfolio-management/add-portfolio" },
  { name: "All Portfolio", path: "/admin/portfolio-management/all-portfolio" },
];

export default function WebsiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col w-full gap-3">
        <WebsiteInformation navMenu={navItems} />
        {children}
      </div>
    </>
  );
}

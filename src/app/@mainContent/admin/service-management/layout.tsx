import WebsiteInformation from "@/components/admin/WebsiteInformation";

const navItems = [
  { name: "Add Service", path: "/admin/service-management/add-service" },
  { name: "All Services", path: "/admin/service-management/all-service" },
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

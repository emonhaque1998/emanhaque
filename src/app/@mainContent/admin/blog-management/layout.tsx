import WebsiteInformation from "@/components/admin/WebsiteInformation";

const navItems = [
  { name: "Add Blog", path: "/admin/blog-management/add-blog" },
  { name: "All Category", path: "/admin/blog-management/all-category" },
  { name: "All Blogs", path: "/admin/blog-management/all-blogs" },
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

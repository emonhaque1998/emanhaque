import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = [
  { name: "Website Information", path: "/admin/website-info" },
  { name: "User Management", path: "/admin/user-management" },
  { name: "Blog Management", path: "/admin/blog-management" },
  { name: "Portfolio Management", path: "/admin/portfolio-management" },
  { name: "Contact Management", path: "/admin/portfolio-management" },
  { name: "Service Management", path: "/admin/service-management" },
  { name: "Price Plans Management", path: "/admin/price-plans-management" },
  { name: "Testimonials Management", path: "/admin/testimonials-management" },
];

export default function AdminLeftSideBar() {
  const pathName = usePathname();
  return (
    <>
      <ul>
        {NavItems.map((item) => (
          <li key={item.name} className="mb-2">
            <Link
              href={item.path}
              className={`block ${
                pathName.startsWith(item.path)
                  ? "text-[#70ba65] dark:text-[#70ba65]"
                  : "text-[#00283a] dark:text-white"
              } px-4 py-1 hover:bg-gray-200 dark:hover:bg-black/20 hover:text-[#00283a] dark:hover:text-white rounded`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

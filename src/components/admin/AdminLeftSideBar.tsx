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
  return (
    <>
      <ul>
        {NavItems.map((item) => (
          <li key={item.name} className="mb-2">
            <a
              href={item.path}
              className="block px-4 py-1 text-[#00283a] dark:text-white hover:bg-gray-200 dark:hover:bg-black/20 hover:text-[#00283a] dark:hover:text-white rounded"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

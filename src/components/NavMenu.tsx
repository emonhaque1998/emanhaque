import path from "path";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Blog", path: "/blog" },
  { name: "Services", path: "/services" },
  { name: "Testimonials", path: "/testimonials" },
];

export default function NavMenu() {
  return (
    <div>
      <ul className="text-[#00283A] dark:text-[#dedee0] flex flex-row gap-5">
        {navItems.map((item) => {
          return (
            <li key={item.name} className="">
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

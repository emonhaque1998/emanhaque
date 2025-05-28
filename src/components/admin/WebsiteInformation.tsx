"use client";

import Link from "next/link";
import MainContainer from "../MainContainer";
import TopDivision from "../TopDivision";
import { usePathname } from "next/navigation";

const websiteInformationNave = [
  { name: "Banner", path: "/admin/website-info/banner" },
  { name: "Social Media", path: "/admin/website-info/social-media" },
];

export default function WebsiteInformation() {
  const pathName = usePathname();

  return (
    <>
      <TopDivision>
        <MainContainer>
          <div className="flex flex-col justify-center items-center w-full">
            <div className="flex flex-row justify-center items-center gap-3">
              {websiteInformationNave.map((item, index) => (
                <Link
                  href={item.path}
                  key={index}
                  className={`cursor-pointer px-2 py-2 rounded-lg ${
                    pathName === item.path
                      ? "bg-[#70ba65]/70"
                      : "bg-black/50 dark:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </MainContainer>
      </TopDivision>
    </>
  );
}

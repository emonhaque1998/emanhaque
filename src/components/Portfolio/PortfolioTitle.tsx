"use client";
import { PortfolioType } from "@/types/allTypes";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function PortfolioTitle({
  portfolios,
}: {
  portfolios?: PortfolioType[] | null | undefined;
}) {
  const [showPostTitle, setPostTitle] = useState(false);

  return (
    <>
      {portfolios &&
        portfolios.map((portfolio, index) => (
          <Link
            key={index}
            href={`/portfolio/${portfolio.category.categorySlug}/${portfolio.slug}`}
          >
            <div
              className="cursor-pointer relative rounded-lg shadow-lg overflow-hidden"
              onMouseEnter={() => setPostTitle(true)}
              onMouseLeave={() => setPostTitle(false)}
            >
              <Image
                src={portfolio.image}
                alt={portfolio.title}
                width={500}
                height={0}
                className="w-full rounded"
              />
              <div
                className={`absolute -bottom-16 ${
                  showPostTitle ? "bottom-0" : "-bottom-16"
                } bg-white cursor-pointer rounded-b transition-all dark:bg-[#00283a] w-full items-center flex flex-row justify-between px-5 py-3`}
              >
                <h1 className="text-lg font-medium">{portfolio.title}</h1>
                <div className="w-10 h-10 rounded-full bg-[#00283a] dark:bg-white flex flex-row items-center justify-center">
                  <FaArrowRight className="text-white dark:text-[#70ba65]" />
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}

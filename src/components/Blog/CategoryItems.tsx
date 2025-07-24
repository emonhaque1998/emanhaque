import HorizontalRowDotted from "../HorizontalRowDotted";
import MainContainer from "../MainContainer";
import { FaArrowRight } from "react-icons/fa6";
import { CategoryType } from "@/types/allTypes";
import Link from "next/link";

interface CategoryItemsProps {
  categoryItems?: CategoryType[] | null;
}

export default function CategoryItems({ categoryItems }: CategoryItemsProps) {
  return (
    <>
      <div className="grid grid-cols-2 gap-3 w-full">
        {categoryItems &&
          categoryItems.map((category, index) => (
            <MainContainer key={index}>
              <div className="flex flex-col items-center w-full">
                <div className="flex flex-row items-center gap-2">
                  <h2 className="text-xl font-bold">{category.categoryName}</h2>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-1 rounded-xl dark:bg-blue-900 dark:text-blue-300">
                    {Array.isArray(category.post) ? category.post.length : 0}{" "}
                    Posts
                  </span>
                </div>
                <HorizontalRowDotted />
                <div className="flex flex-row items-center justify-center w-full ">
                  <Link
                    href={`/blog/${category.categorySlug}`}
                    className="flex flex-row items-center justify-center gap-2"
                  >
                    Read Publications <FaArrowRight />
                  </Link>
                </div>
              </div>
            </MainContainer>
          ))}
      </div>
    </>
  );
}

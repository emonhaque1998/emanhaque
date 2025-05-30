import CategoryItems from "@/components/Blog/CategoryItems";
import Publications from "@/components/Home/Publications";
import TopDivision from "@/components/TopDivision";

const categoryItems = [
  {
    name: "Design",
    postCount: 5,
    slug: "design",
  },
  {
    name: "Development",
    postCount: 10,
    slug: "development",
  },
  {
    name: "Marketing",
    postCount: 3,
    slug: "marketing",
  },
];

export default function Blog() {
  return (
    <>
      <TopDivision>
        <CategoryItems categoryItems={categoryItems} />
      </TopDivision>
      <Publications take={6} />
    </>
  );
}

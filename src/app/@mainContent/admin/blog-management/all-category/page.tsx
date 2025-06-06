"use client";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import { useEffect, useState } from "react";
import { currentUser } from "@clerk/nextjs/server";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addCategory, addAllCategory } from "@/store/categorySlice";
import toast from "react-hot-toast";
import EditDeleteButton from "@/components/admin/EditDeleteButton";

export default function AllCategory() {
  const [showLoading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");
  const dispatch = useAppDispatch();

  const categories = useAppSelector((state) => state.categorySlice.data);

  console.log("show my category", categories);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      categoryName: formData.get("categoryName"),
      categorySlug: slug,
    };

    const res = await axios.post("/api/post/category", data);

    if (res.status === 200) {
      console.log(res.data.category);
      dispatch(addCategory(res.data.category));
      toast.success(res.data.msg);
      setLoading(false);
    } else {
      toast.error(res.data.error || "Something went wrong");
      setLoading(false);
    }
  };

  const titleToSlug = (category: string) => {
    const categorySlug = category
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove non-word characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-"); // Replace multiple hyphens with a single one

    setSlug(categorySlug);
  };

  useEffect(() => {
    const getAllCategory = async () => {
      const res = await axios.get(`/api/post/category?take=10`);

      if (res.status === 200) {
        dispatch(addAllCategory(res.data.allCategory));
      }
    };

    getAllCategory();
  }, []);
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="Menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <MainContainer>
            <h1 className="text-[#00283a] dark:text-white text-lg font-bold">
              All Category
            </h1>
            <div className="flex flex-col items-end justify-end w-full">
              <form className="w-full mt-5" onSubmit={handleSubmit}>
                <div className="grid gap-6 mb-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="categoryName"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Name
                    </label>
                    <input
                      type="text"
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        e.preventDefault();
                        titleToSlug(e.target.value);
                      }}
                      name="categoryName"
                      id="categoryName"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Place your category here"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="categorySlug"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Category Slug
                    </label>
                    <input
                      type="text"
                      disabled={true}
                      id="categorySlug"
                      name="categorySlug"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Place your slug here"
                      required
                      value={slug}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={showLoading}
                  className=" cursor-pointer text-white flex flex-row items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Add Category
                  {showLoading && (
                    <svg
                      aria-hidden="true"
                      className="w-3 h-3 me-2 text-black animate-spin dark:text-black fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  )}
                </button>
              </form>
            </div>
            <div className="w-full mt-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Category Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Category Slug
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories &&
                      categories.map((category, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {category.categoryName}
                            </th>
                            <td className="px-6 py-4 text">
                              {category.categorySlug}
                            </td>

                            <td className="px-6 py-4 flex flex-row gap-3 justify-center">
                              <EditDeleteButton id={category.id} />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

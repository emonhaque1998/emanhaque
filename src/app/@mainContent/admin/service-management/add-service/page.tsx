"use client";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import React, { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addPost } from "@/store/postSlice";
import {
  addAllCategory,
  addCategory,
  addSingleCategory,
} from "@/store/categorySlice";
import toast from "react-hot-toast";
import { UploadButton } from "@/utils/uploadthing";
import DOMPurify from "dompurify";
import { addService } from "@/store/serviceSlice";

export default function AddBlog() {
  const [showLoading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.userSlice.user);
  const categories = useAppSelector((state) => state.categorySlice.data);
  const singleCategory = useAppSelector(
    (state) => state.categorySlice.singleCategory
  );
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      image: imageUrl,
      shortDescription: formData.get("shortDescription"),
      categoryId: formData.get("categoryId"),
    };

    const res = await axios
      .post("/api/service", data)
      .then((res) => {
        if (res.status === 200) {
          dispatch(addService(res.data));
          toast.success(res.data.msg);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
        setLoading(false);
      });
  };

  useEffect(() => {
    const getCategories = async () => {
      const res = await axios.get("/api/post/category");
      dispatch(addAllCategory(res.data.allCategory));
    };

    getCategories();
  }, []);

  useEffect(() => {
    axios.get(`/api/post/category/${categoryId}`).then((res) => {
      dispatch(addSingleCategory(res.data));
    });
  }, [categoryId]);

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
              Add Service
            </h1>
            <form className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="categoryId"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select an category
                  </label>
                  <select
                    id="categoryId"
                    name="categoryId"
                    onChange={(e: any) => {
                      setCategoryId(e.target.value);
                    }}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {categories &&
                      categories.map((category, index) => {
                        return (
                          <option key={index} value={category.id}>
                            {category.categoryName}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="slug"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Slug
                  </label>
                  <input
                    type="text"
                    id="slug"
                    disabled={true}
                    name="slug"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Place your Slug here"
                    required
                    value={singleCategory?.categorySlug}
                  />
                </div>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="shortDescription"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Sort Description
                </label>
                <textarea
                  id="shortDescription"
                  name="shortDescription"
                  rows={4}
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>

              <div className="mt-5">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    setImageUrl(res[0].ufsUrl);
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>
              <button
                type="submit"
                disabled={showLoading}
                className=" cursor-pointer text-white flex flex-row items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
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
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

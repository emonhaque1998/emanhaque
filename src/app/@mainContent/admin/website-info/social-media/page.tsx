"use client";
import MainContainer from "@/components/MainContainer";
import axios from "axios";
import toast from "react-hot-toast";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addBanner } from "@/store/bannerSlice";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";

export default function Page() {
  const dispatch = useAppDispatch();
  const banner = useAppSelector((state) => state.bannerSlice);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title"),
      slogan: formData.get("slogan"),
      url: formData.get("url"),
    };

    const res = await axios.post("/api/banner", data);

    if (res.status === 201) {
      dispatch(
        addBanner({
          title: res.data.data.title,
          slogan: res.data.data.slogan,
          url: res.data.data.url,
        })
      );
      toast.success(res.data.success);
    } else {
      toast.error(res.data.error || "Something went wrong");
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key="close"
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
              Social Media Information
            </h1>

            <form className="w-full mt-5" onSubmit={handleSubmit}>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="title"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    id="title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Place your title here"
                    required
                    defaultValue={banner.title || ""} // Pre-fill with existing title
                  />
                </div>
                <div>
                  <label
                    htmlFor="slogan"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Slogan
                  </label>
                  <input
                    type="text"
                    id="slogan"
                    name="slogan"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Place your slogan here"
                    required
                    defaultValue={banner.slogan || ""} // Pre-fill with existing slogan
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="url"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Video Url
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="https://www.youtube.com/watch?v=example"
                  required
                  defaultValue={banner.url || ""} // Pre-fill with existing URL
                />
              </div>

              <button
                type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            </form>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

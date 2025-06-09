"use client";
import axios from "axios";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addAllPost } from "@/store/postSlice";
import Image from "next/image";

export default function AllPost() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.postSlice.data);

  useEffect(() => {
    const getPost = async () => {
      const allPost = await axios.get("/api/post?take=10");
      dispatch(addAllPost(allPost.data.allPost));
    };

    getPost();
  }, []);

  console.log(posts);
  return (
    <div className="w-full mt-10">
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {posts &&
              posts.map((post, index) => {
                return (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {post.title}
                    </th>
                    <td className="px-6 py-4 text">
                      <Image
                        src={post.image}
                        width={50}
                        height={0}
                        alt={post.title}
                      />
                    </td>

                    <td className="px-6 py-4 flex flex-row gap-3 justify-center">
                      {/* <EditDeleteButton id={category.id} /> */}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

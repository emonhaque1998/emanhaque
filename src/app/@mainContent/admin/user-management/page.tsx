"use client";
import { motion } from "motion/react";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import prisma from "@/lib/prisma";
import AdminCountDecoration from "@/components/admin/AdminCountDecoration";
import EditDeleteButton from "@/components/admin/EditDeleteButton";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { updateAllUser } from "@/store/userSlice";

export default function () {
  const users = useAppSelector((state) => state.userSlice.allUser);

  const dispatch = useAppDispatch();

  const recivedDataHandler = (data: any) => {
    console.log(data);
  };

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("/api/user/all-user?take=10");
      dispatch(updateAllUser(res.data));
    };

    getUser();
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
              User Information
            </h1>
            <div className="w-full mt-10">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Role
                      </th>
                      <th scope="col" className="px-6 py-3 text-center">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {users &&
                      users.map((item, index) => {
                        return (
                          <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
                          >
                            <th
                              scope="row"
                              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                              {item.name}
                            </th>
                            <td className="px-6 py-4 text">{item.email}</td>
                            <td className="px-6 py-4 text">{item.role}</td>
                            <td className="px-6 py-4 flex flex-row gap-3 justify-center">
                              <EditDeleteButton
                                id={item.id}
                                sendData={recivedDataHandler}
                                path="post"
                              />
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

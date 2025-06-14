"use client";
import * as motion from "motion/react-client";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import AllPost from "@/components/admin/AllPost";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { useEffect } from "react";
import { addAllContact } from "@/store/contactSlice";
import AllContact from "@/components/admin/AllContact";

export default function ContactManagement() {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((state) => state.constactSlice.data);

  useEffect(() => {
    const getContact = async () => {
      const allPost = await axios.get("/api/contact?take=10");
      dispatch(addAllContact(allPost.data));
    };

    getContact();
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
              All Contacts
            </h1>
            <div className="w-full">
              <AllContact constacts={contacts} />
            </div>
          </MainContainer>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

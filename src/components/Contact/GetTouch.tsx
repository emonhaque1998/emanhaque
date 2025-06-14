"use client";
import Button from "../Button";
import MainContainer from "../MainContainer";
import TitleHeader from "../TitleHeader";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import axios from "axios";
import { addContact } from "@/store/contactSlice";
import toast from "react-hot-toast";

export default function GetTouch() {
  const [loading, setLoading] = useState(false);
  const user = useAppSelector((state) => state.userSlice.user);
  const dispatch = useAppDispatch();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      userId: user?.id,
      name: user?.name ?? formData.get("name"),
      email: user?.email ?? formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await axios.post("/api/contact", data);

      if (res.status === 200) {
        dispatch(addContact(res.data));
        toast.success(res.data.msg);
        setLoading(false);
      }
    } catch (error: any) {
      toast.error(error.response.data.error || "Something went wrong");
      setLoading(false);
    }
  };
  return (
    <>
      <div className="mt-5">
        <TitleHeader title="Get in touch" secNumber={2} titleWidth="w-3/12" />
        <div className="mt-5">
          <MainContainer>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  className="bg-[#f4f5f7] text-gray-900 text-sm rounded-lg block w-full px-5 py-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none"
                  placeholder="Name"
                  required
                  disabled={user ? true : false}
                  defaultValue={user?.name ?? ""}
                />
                <input
                  type="email"
                  className="bg-[#f4f5f7] text-gray-900 text-sm rounded-lg block w-full px-5 py-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none"
                  placeholder="Email"
                  name="email"
                  required
                  disabled={user ? true : false}
                  defaultValue={user?.email ?? ""}
                />
                <input
                  type="text"
                  className="bg-[#f4f5f7] text-gray-900 text-sm rounded-lg block w-full px-5 py-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white outline-none"
                  placeholder="Subject"
                  name="subject"
                  required
                />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block py-2.5 px-5 w-full text-sm text-gray-900 bg-[#f4f5f7] rounded-lg outline-none dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white"
                  placeholder="Write your thoughts here..."
                ></textarea>

                <div className="flex flex-row items-center justify-between">
                  <Button text="Send" classProperty="w-1/5">
                    <FaArrowRight className="text-sm" />
                  </Button>
                  <span className="text-gray-500">
                    * I promise the confidentiality of your personal information
                  </span>
                </div>
              </div>
            </form>
          </MainContainer>
        </div>
      </div>
    </>
  );
}

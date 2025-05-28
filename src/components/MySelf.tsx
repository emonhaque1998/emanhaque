"use client";
import { Typewriter } from "react-simple-typewriter";
import HorizontalRowDotted from "./HorizontalRowDotted";
import { FaLinkedin } from "react-icons/fa6";
import Button from "./Button";
import { MdEmail } from "react-icons/md";
import ShowAbailable from "./ShowAbailable";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/store/hooks";
import { addUser } from "@/store/userSlice";
import { useUser } from "@clerk/nextjs";
import AdminLeftSideBar from "./admin/AdminLeftSideBar";
import toast from "react-hot-toast";

interface MySelfProps {
  user?: {
    id: string;
    email: string;
    name?: string | null; // Optional field
    role?: string | null; // Optional field
    clerkId: string;
    image?: string;
    createdAt: Date;
  };
}

export default function MySelf() {
  const user = useAppSelector((state) => state.userSlice.user);
  const [mounted, setMounted] = useState(false);
  const dispatch = useAppDispatch();
  const { user: clerkUser } = useUser();
  const pathName = usePathname();

  const isAuthendicated =
    pathName.startsWith("/user") || pathName.startsWith("/admin");

  const isAdmin = pathName.startsWith("/admin");

  const isUser = pathName.startsWith("/user");

  useEffect(() => {
    setMounted(true);

    const createNewUser = async () => {
      const res = await axios.get("/api/user");
      console.log("User data:", res.status);
      if (res.status !== 200) {
        toast.error(res.data.error || "Failed to fetch user data");
      } else {
        dispatch(addUser(res.data));
      }
    };

    createNewUser();
  }, []);

  useEffect(() => {
    const createNewUser = async () => {
      const res = await axios.get("/api/user");
      console.log("User data:", res);
      // setUser(res.data);
      dispatch(addUser(res.data));
    };

    createNewUser();
  }, [clerkUser?.imageUrl]);

  // Prevent rendering until mounted on client
  if (!mounted) return null;

  return (
    <div className="dark:bg-[#00283a] bg-white w-1/4 z-30 sticky max-md:hidden px-10 py-8 top-22 left-40 rounded-xl">
      <div className="flex flex-col">
        <div className="flex justify-center">
          <div className="justify-center relative inline-block">
            <ShowAbailable
              imageUrl={user?.image}
              isAuthPage={isAuthendicated}
            />
          </div>
        </div>
        <div className="flex flex-col items-center mt-2">
          <h1 className="text-lg font-bold">
            {user ? (isAuthendicated ? user?.name : "Eman H.") : "Eman H."}
          </h1>
          <h3 className="text-sm text-gray-400">
            I'm a{" "}
            <span className="dark:text-[#70ba65] text-red-600">
              <Typewriter
                words={[
                  "Web Developer",
                  "SEO Expert",
                  "WordPress Developer",
                  "Graphics Designer",
                  "Digital Marketer",
                ]}
                cursorColor="red"
                loop={Infinity}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h3>
        </div>
        <HorizontalRowDotted />
      </div>
      {!isAuthendicated && (
        <>
          <div className="flex justify-center py-5">
            <div className="flex flex-row gap-3">
              <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
              <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
              <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
              <FaLinkedin className="text-gray-600 text-xl dark:text-[#70ba65]" />
            </div>
          </div>
          <HorizontalRowDotted />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h2>Residence:</h2>
              <h2>Bangladesh</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h2>City:</h2>
              <h2>Manikganj</h2>
            </div>
            <div className="flex flex-row justify-between">
              <h2>Age:</h2>
              <h2>26</h2>
            </div>
          </div>
          <HorizontalRowDotted />
          <div className="flex justify-center">
            <Button classProperty="w-2/3" text="Contact Me" outLine={true}>
              <MdEmail />
            </Button>
          </div>
        </>
      )}
      {isAdmin && <AdminLeftSideBar />}
    </div>
  );
}

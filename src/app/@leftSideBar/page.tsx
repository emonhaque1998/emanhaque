import { createUser, getUser } from "@/app/actions/user";
import MySelf from "@/components/MySelf";
import prisma from "@/lib/prisma";

export default async function LeftSideBar() {
  const user = await getUser();

  return (
    <>
      <h1 className="text-lg font-bold">{user?.message}</h1>
      <MySelf />
    </>
  );
}

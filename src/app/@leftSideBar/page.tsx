import { createUser, getUser } from "@/actions/admin/user";
import MySelf from "@/components/MySelf";
import prisma from "@/lib/prisma";

export default async function LeftSideBar() {
  const user = await createUser();

  return (
    <>
      <h1 className="text-lg font-bold">{user?.name}</h1>
      <MySelf />
    </>
  );
}

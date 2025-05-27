import { createUser, getUser } from "@/app/actions/user";
import MySelf from "@/components/MySelf";
import prisma from "@/lib/prisma";

export default async function LeftSideBar() {
  const emonUser = await createUser();

  return (
    <>
      <h1 className="text-lg font-bold">{emonUser}</h1>
      <MySelf />
    </>
  );
}

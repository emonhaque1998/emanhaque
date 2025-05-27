import { createUser, getUser } from "@/actions/user";
import MySelf from "@/components/MySelf";
import prisma from "@/lib/prisma";
import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";

export default async function LeftSideBar() {
  const { userId } = await auth();
  const user = await createUser(userId);

  return (
    <>
      <h1>{user?.name}</h1>
    </>
  );
}

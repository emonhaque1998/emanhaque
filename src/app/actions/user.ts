"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const createUser = async () => {
  // const { userId } = await auth();

  // if (!userId) return null;

  const existingUser = await prisma.user.findFirst();

  // if (existingUser) return existingUser;

  // const client = await clerkClient();
  // const clerkUser = await client.users.getUser(userId);
  // const role = (clerkUser.publicMetadata.role as string) || "USER";

  // const newUser = await prisma.user.create({
  //   data: {
  //     clerkId: userId,
  //     email: clerkUser.emailAddresses[0].emailAddress,
  //     name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
  //     role: role,
  //   },
  // });

  return existingUser;
};

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

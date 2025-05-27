"use server";

import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const createUser = async () => {
  const userId = await currentUser();
  return userId;
  if (!userId?.id) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: userId.id },
  });

  if (existingUser) return existingUser;

  const client = await clerkClient();
  const clerkUser = await client.users.getUser(userId.id);
  const role = (clerkUser.publicMetadata.role as string) || "USER";

  const newUser = await prisma.user.create({
    data: {
      clerkId: userId.id,
      email: clerkUser.emailAddresses[0].emailAddress,
      name: `${clerkUser.firstName} ${clerkUser.lastName}`.trim(),
      role: role,
    },
  });

  return newUser;
};

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

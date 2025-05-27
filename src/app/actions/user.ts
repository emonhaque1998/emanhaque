"use server";

import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const createUser = async () => {
  const userId = await currentUser();

  if (!userId?.id) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: userId.id },
  });

  if (existingUser) return existingUser;
};

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

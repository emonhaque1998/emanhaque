"use server";

import { auth, clerkClient, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const createUser = async (userId: string | null) => {
  if (!userId) return null;

  const existingUser = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  if (existingUser) return existingUser;

  const data = await clerkClient();
  const userData = await data.users.getUser(userId);

  const email = userData.emailAddresses?.[0]?.emailAddress;
  const name = `${userData.firstName ?? ""} ${userData.lastName ?? ""}`.trim();

  const newUser = await prisma.user.create({
    data: {
      clerkId: userId,
      email,
      name,
      role: "user", // Default role
    },
  });

  return newUser;
};

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

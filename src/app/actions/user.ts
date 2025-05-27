"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export const createUser = async () => {
  const { userId } = await auth();

  return userId;
};

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

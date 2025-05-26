import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function createUser() {
  const { userId } = await auth();

  if (!userId) {
    return null; // User is not authenticated
  }

  const user = await prisma.user.findUnique({
    where: { clerkId: userId },
  });

  return user;
}

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

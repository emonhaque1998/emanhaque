"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function createUser() {
  const { userId } = await auth();

  if (!userId) {
    return null; // User is not authenticated
  }

  interface User {
    emailAddresses?: { emailAddress: string }[];
    firstName?: string;
    lastName?: string;
    publicMetadata?: {
      role?: string;
    };
  }

  const user = (await currentUser()) as User;
  if (!user || !user.emailAddresses?.[0]?.emailAddress) {
    return;
  }

  const email = user.emailAddresses[0].emailAddress;
  const name = `${user.firstName || ""} ${user.lastName || ""}`.trim();
  const role = user.publicMetadata?.role; // Default to 'user' if no role is set

  // Sync the user to your database
  const createU = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {},
    create: {
      clerkId: userId,
      email,
      name,
      role,
    },
  });

  return createU;
}

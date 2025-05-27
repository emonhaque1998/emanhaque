import { NextResponse } from "next/server";
import { auth, clerkClient } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Fetch user from Clerk using clerkClient
  const clerk = await clerkClient();

  const clerkUser = await clerk.users.getUser(userId);

  const email = clerkUser.emailAddresses?.[0]?.emailAddress;
  const name = `${clerkUser.firstName ?? ""} ${
    clerkUser.lastName ?? ""
  }`.trim();

  // Upsert user into your database using Prisma
  const dbUser = await prisma.user.upsert({
    where: { clerkId: userId },
    update: {
      email,
      name,
    },
    create: {
      clerkId: userId,
      email,
      name,
      role: "user", // Default role, adjust as necessary
    },
  });

  return NextResponse.json(dbUser);
}

"use server";

import { auth, currentUser } from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function createUser() {
  try {
    const user = await prisma.user.findFirst();

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    return null; // Handle error appropriately
  }
}

export async function getUser() {
  return { message: "This is a server action to get user data." };
}

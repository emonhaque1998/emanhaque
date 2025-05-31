"use server";

import prisma from "@/lib/prisma";

export const getSinglePost = async (slug: string) => {
  if (!slug) {
    return { error: "Slug Not found" };
  }

  try {
    const postData = await prisma.post.findFirst({
      where: {
        slug,
      },
      include: {
        user: true,
      },
    });

    if (postData) {
      return { success: true, postData };
    }
  } catch (error) {
    return { success: false, error };
  }
};

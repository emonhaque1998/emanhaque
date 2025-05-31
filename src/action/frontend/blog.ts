"use server";

import prisma from "@/lib/prisma";

export const getSinglePost = async (slug: string) => {
  if (!slug) {
    return { error: "Slug Not found" };
  }

  const postData = await prisma.post.findUnique({
    where: {
      slug,
    },
    include: {
      user: true,
    },
  });

  const post = JSON.parse(JSON.stringify(postData));

  if (post) {
    return { success: true, post };
  }
};

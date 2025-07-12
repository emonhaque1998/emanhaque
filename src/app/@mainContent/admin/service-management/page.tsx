import { MotionWrapper } from "@/components/MotionWrapper";
import { AnimatePresence, usePresenceData, wrap } from "motion/react";
import MainContainer from "@/components/MainContainer";
import prisma from "@/lib/prisma";
import AdminCountDecoration from "@/components/admin/AdminCountDecoration";

export default async function BlogManagement() {
  const [postCount, categoryCount] = await Promise.all([
    prisma.post.count(),
    prisma.category.count(),
  ]);

  return (
    <>
      <MotionWrapper>
          <MainContainer>
            <h1 className="text-[#00283a] dark:text-white text-lg font-bold">
              Service Information
            </h1>

            <div className="mt-10 flex flex-row justify-between w-full gap-5">
              <AdminCountDecoration title="Total Post" count={postCount} />
              <AdminCountDecoration
                title="Total Category"
                count={categoryCount}
              />
            </div>
          </MainContainer>
        </MotionWrapper>
    </>
  );
}

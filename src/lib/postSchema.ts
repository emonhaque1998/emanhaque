import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().optional(),
  userId: z.string().cuid("Invalid user ID"), // Must match Prisma's cuid format
});

export type PostInput = z.infer<typeof postSchema>;

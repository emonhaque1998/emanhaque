import { z } from "zod";

export const categorySchema = z.object({
  categoryName: z.string().min(1, "Title is required"),
  categorySlug: z.string().min(1, "Slug is required"),
});

export type CategoryInput = z.infer<typeof categorySchema>;

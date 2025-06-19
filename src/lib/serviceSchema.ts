import { z } from "zod";

export const serviceSchema = z.object({
  image: z.string().min(1, "Image is required"),
  shortDescription: z.string().min(1, "Description is required"),
  categoryId: z.string().min(1, "Category is required"),
});

export type ServiceInput = z.infer<typeof serviceSchema>;

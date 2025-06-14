import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, "Title is required"),
  email: z.string().min(1, "Image is requried"),
  subject: z.string().min(1, "Slug is required"),
  message: z.string().optional(),
  userId: z.string().optional(), // Must match Prisma's cuid format
});

export type ContactInput = z.infer<typeof contactSchema>;

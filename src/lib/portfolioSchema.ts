import { z } from "zod";

export const portfolioSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Image is requried"),
  slug: z.string().min(1, "Slug is required"),
  image: z.string().min(1, "Image is requred"),
  status: z.enum(["Pending", "Complete"]),
  clientName: z.string().min(1, "Client Name is required"),
  location: z.string().min(1, "Location is required"),
  userId: z.string().cuid("Invalid user ID"), // Must match Prisma's cuid format
  categoryId: z.string().cuid("Invalid user ID"), // Must match Prisma's cuid format
});

export type PortfolioInput = z.infer<typeof portfolioSchema>;

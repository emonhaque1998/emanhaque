// lib/validation/videoSchema.ts
import { z } from "zod";

export const bannerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slogan: z.string().min(1, "Slogan is required"),
  url: z.string().url("Must be a valid URL"),
});

export type BannerInput = z.infer<typeof bannerSchema>;

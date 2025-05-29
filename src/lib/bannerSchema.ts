// lib/validation/videoSchema.ts
import { z } from "zod";

export const bannerSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slogan: z.string().min(1, "Slogan is required"),
  url: z.string().url("Must be a valid URL"),
  image: z.string().url().nullable(),
  youtube: z.string().url().optional(),
  linkdin: z.string().url().optional(),
  github: z.string().url().optional(),
  facebook: z.string().url().optional(),
});

export type BannerInput = z.infer<typeof bannerSchema>;

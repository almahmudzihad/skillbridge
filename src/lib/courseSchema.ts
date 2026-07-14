import { z } from "zod";

export const courseSchema = z.object({
  title: z.string().min(3),
  category: z.string().min(1),
  instructor: z.string().min(2),
  duration: z.string().min(2),
  price: z.number().positive(),
  rating: z.number().min(1).max(5),
  image: z.url(),
  description: z.string().min(20),
});

export type CourseFormData = z.infer<typeof courseSchema>;
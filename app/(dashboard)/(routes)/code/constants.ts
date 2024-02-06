import * as z from "zod";

// Validate form data by requiring a string with at least 1 char
export const formSchema = z.object({
  prompt: z.string().min(1, {
    message: "Prompt is required",
  }),
});

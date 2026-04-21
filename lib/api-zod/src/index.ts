export * from "./generated/api";
export * from "./generated/types";

import { z } from "zod";

export const ContactRequestSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z.string().trim().min(10, "Message must be at least 10 characters."),
});

export const ContactResponseSchema = z.object({
  ok: z.boolean(),
  message: z.string(),
});

export type ContactRequest = z.infer<typeof ContactRequestSchema>;
export type ContactResponse = z.infer<typeof ContactResponseSchema>;

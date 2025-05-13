import {z} from 'zod';

export const messageSchema = z.object({
    content: z
    .string()
    .min(5, {message: "Content must be at least 5 characters"})
    .max(500, {message: "Content must be no more than 500 characters"}),
})
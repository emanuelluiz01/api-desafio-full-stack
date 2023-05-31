import { z } from "zod";

const LoginSchema = z.object({
    email: z.string().min(15).max(50),
    password: z.string().min(4).max(50),
});
export { LoginSchema };

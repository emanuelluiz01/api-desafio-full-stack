import { z } from "zod";

const userSchema = z.object({
    name: z.string().min(2).max(20),
    email: z.string().email().max(50),
    phone: z.string().max(20),
    password: z.string().min(4).max(50),
});

const returnUserSchema = userSchema
    .extend({
        id: z.string(),
        created_at: z.string(),
    })
    .omit({ password: true });

const returnUsersArr = returnUserSchema.array();
const userUpdateSchema = userSchema.partial();

export { userSchema, returnUserSchema, returnUsersArr, userUpdateSchema };

import { z } from "zod";

const contactSchema = z.object({
    name: z.string().min(2).max(20),
    email: z.string().email().max(50),
    phone: z.string().max(20),
    user: z.string(),
});

const returnContactSchema = contactSchema.extend({
    id: z.string(),
    created_at: z.string(),
});

const returnContactsArr = returnContactSchema.array();
const contactUpdateSchema = contactSchema.partial();

export {
    contactSchema,
    returnContactSchema,
    returnContactsArr,
    contactUpdateSchema,
};

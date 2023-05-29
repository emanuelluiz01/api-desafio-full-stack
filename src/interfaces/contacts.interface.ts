import { z } from "zod";
import {
    contactSchema,
    returnContactSchema,
    returnContactsArr,
} from "../schemas/contact.schema";
import { DeepPartial } from "typeorm";

type iContact = z.infer<typeof contactSchema>;
type iContactRequest = z.infer<typeof returnContactSchema>;
type iContactsReturn = z.infer<typeof returnContactsArr>;
type iContactsUpdate = DeepPartial<iContact>;

export { iContact, iContactRequest, iContactsReturn, iContactsUpdate };

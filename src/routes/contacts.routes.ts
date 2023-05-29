import { Router } from "express";
import {
    createContactController,
    deleteContactController,
    listContactsController,
    updateContactController,
} from "../controllers/contacts.controller";
import { validateDatas } from "../middlewares/validatedDatas.middleware";
import { contactSchema } from "../schemas/contact.schema";
import { userUpdateSchema } from "../schemas/user.schema";
import { emailExists } from "../middlewares/emailExists.middleware";

const contactsRoutes = Router();

contactsRoutes.get("", listContactsController);
contactsRoutes.post(
    "",
    validateDatas(contactSchema),
    emailExists,
    createContactController
);
contactsRoutes.patch(
    "/:id",
    validateDatas(userUpdateSchema),
    emailExists,
    updateContactController
);
contactsRoutes.delete("/:id", deleteContactController);

export { contactsRoutes };

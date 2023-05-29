import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContact, iContactRequest } from "../../interfaces/contacts.interface";
import { returnContactSchema } from "../../schemas/contact.schema";

const createContactService = async (
    contactData: any
): Promise<iContactRequest> => {
    console.log(contactData);
    const contactRepo = AppDataSource.getRepository(Contact);

    const contact = contactRepo.create(contactData);
    await contactRepo.save(contact);

    const newContact = returnContactSchema.parse(contact);
    return newContact;
};

export { createContactService };

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import {
    iContactRequest,
    iContactsUpdate,
} from "../../interfaces/contacts.interface";
import { AppError } from "../../errors";
import { returnContactSchema } from "../../schemas/contact.schema";

const updateContactService = async (
    contactData: iContactsUpdate,
    contactId: string
): Promise<iContactRequest> => {
    const contactRepo: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const oldContactData: Contact | null = await contactRepo.findOneBy({
        id: contactId,
    });

    if (!oldContactData) {
        throw new AppError("User not found", 404);
    }

    const newUser = contactRepo.create({
        ...oldContactData,
        ...contactData,
    });

    await contactRepo.save(newUser);

    return returnContactSchema.parse(newUser);
};

export { updateContactService };

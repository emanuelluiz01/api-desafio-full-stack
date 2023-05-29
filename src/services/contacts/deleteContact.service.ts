import { Repository } from "typeorm";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

const deleteContactService = async (contactId: string): Promise<void> => {
    const contactRepo: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const findContact: Contact | null = await contactRepo.findOneBy({
        id: contactId,
    });

    if (!findContact) {
        throw new AppError("User not found", 404);
    }

    await contactRepo.remove(findContact);
};

export { deleteContactService };

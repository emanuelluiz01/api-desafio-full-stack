import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Contact } from "../../entities/contact.entity";
import { iContactsReturn } from "../../interfaces/contacts.interface";

const listContactService = async (): Promise<iContactsReturn> => {
    const contactRepo: Repository<Contact> =
        AppDataSource.getRepository(Contact);

    const findContact: any = await contactRepo.find({
        relations: {
            user: true,
        },
    });

    return findContact;
};

export { listContactService };

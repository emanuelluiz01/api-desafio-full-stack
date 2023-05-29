import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactService } from "../services/contacts/listContact.service";
import { iContactsUpdate } from "../interfaces/contacts.interface";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/deleteContact.service";

const createContactController = async (req: Request, res: Response) => {
    const contactData = req.body;

    const newContact = await createContactService(contactData);
    return res.status(201).json(newContact);
};

const listContactsController = async (req: Request, res: Response) => {
    const contacts = await listContactService();
    return res.json(contacts);
};

const updateContactController = async (req: Request, res: Response) => {
    const contactId: string = req.params.id;
    const contactData: iContactsUpdate = req.body;

    const updateContact = await updateContactService(contactData, contactId);
    return res.json(updateContact);
};

const deleteContactController = async (req: Request, res: Response) => {
    const contactId: string = req.params.id;
    await deleteContactService(contactId);

    return res.status(204).send();
};

export {
    createContactController,
    listContactsController,
    updateContactController,
    deleteContactController,
};

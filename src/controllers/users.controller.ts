import { Request, Response } from "express";
import { iUser, iUserUpdate } from "../interfaces/users.interface";
import { createUserService } from "../services/users/createUser.service";
import { listUsersService } from "../services/users/listUsers.service";
import { deleteUserService } from "../services/users/deleteUser.service";
import { updateUserService } from "../services/users/updateUser.service";

const createUserController = async (req: Request, res: Response) => {
    const userData: iUser = req.body;
    const newUser = await createUserService(userData);

    return res.status(201).json(newUser);
};

const listUsersController = async (req: Request, res: Response) => {
    const users = await listUsersService();
    return res.json(users);
};

const updateUserController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    const userData: iUserUpdate = req.body;

    const updateUser = await updateUserService(userData, userId);
    return res.json(updateUser);
};

const deleteUserController = async (req: Request, res: Response) => {
    const userId = req.params.id;
    await deleteUserService(userId);

    res.status(204).send();
};

export {
    createUserController,
    listUsersController,
    updateUserController,
    deleteUserController,
};

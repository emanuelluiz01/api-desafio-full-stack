import { Router } from "express";
import {
    createUserController,
    deleteUserController,
    listUsersController,
    updateUserController,
} from "../controllers/users.controller";
import { validateDatas } from "../middlewares/validatedDatas.middleware";
import { userSchema, userUpdateSchema } from "../schemas/user.schema";
import { emailExists } from "../middlewares/emailExists.middleware";

const usersRoutes = Router();

usersRoutes.get("", listUsersController);
usersRoutes.post(
    "",
    validateDatas(userSchema),
    emailExists,
    createUserController
);

usersRoutes.patch(
    "/:id",
    validateDatas(userUpdateSchema),
    emailExists,
    updateUserController
);
usersRoutes.delete("/:id", deleteUserController);

export { usersRoutes };

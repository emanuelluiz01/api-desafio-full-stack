import { z } from "zod";
import {
    returnUserSchema,
    returnUsersArr,
    userSchema,
} from "../schemas/user.schema";
import { DeepPartial } from "typeorm";

type iUser = z.infer<typeof userSchema>;
type iUserRequest = z.infer<typeof returnUserSchema>;
type iUsersReturn = z.infer<typeof returnUsersArr>;
type iUserUpdate = DeepPartial<iUser>;

export { iUser, iUserRequest, iUserUpdate, iUsersReturn };

import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUser, iUserRequest } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/user.schema";

const createUserService = async (userData: iUser): Promise<iUserRequest> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const user = userRepo.create(userData);
    await userRepo.save(user);

    const newUser = returnUserSchema.parse(user);
    return newUser;
};

export { createUserService };

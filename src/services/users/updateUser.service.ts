import { Repository } from "typeorm";
import { iUserRequest } from "../../interfaces/users.interface";
import { iUserUpdate } from "../../interfaces/users.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { returnUserSchema } from "../../schemas/user.schema";

const updateUserService = async (
    data: iUserUpdate,
    userId: string
): Promise<iUserRequest> => {
    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const oldUserData: User | null = await userRepo.findOneBy({
        id: userId,
    });

    console.log(oldUserData);

    if (!oldUserData) {
        throw new AppError("User not found", 404);
    }

    const newUser = userRepo.create({
        ...oldUserData,
        ...data,
    });

    await userRepo.save(newUser);

    return returnUserSchema.parse(newUser);
};

export { updateUserService };

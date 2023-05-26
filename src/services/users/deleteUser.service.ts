import { Repository } from "typeorm";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";
import { iUser } from "../../interfaces/users.interface";
import { AppError } from "../../errors";

const deleteUserService = async (userId: string): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepository.findOneBy({
        id: userId,
    });

    if (!findUser) {
        throw new AppError("User not found", 404);
    }

    await userRepository.remove(findUser);
};

export { deleteUserService };

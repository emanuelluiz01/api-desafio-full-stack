import { Repository } from "typeorm";
import { iUsersReturn } from "../../interfaces/users.interface";
import { User } from "../../entities/user.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async (): Promise<iUsersReturn> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findUsers: iUsersReturn = await userRepository.find();

    return findUsers;
};

export { listUsersService };

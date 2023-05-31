import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { iUser, iUserRequest } from "../../interfaces/users.interface";
import { returnUserSchema } from "../../schemas/user.schema";
import { hash } from "bcryptjs";

const createUserService = async (userData: iUser): Promise<iUserRequest> => {
    const { email, name, phone, password } = userData;

    const userRepo: Repository<User> = AppDataSource.getRepository(User);

    const hashedPass = await hash(password, 10);

    const user = userRepo.create({
        name,
        email,
        phone,
        password: hashedPass,
    });

    await userRepo.save(user);

    const newUser = returnUserSchema.parse(user);
    return newUser;
};

export { createUserService };

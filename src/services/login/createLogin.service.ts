import { compare } from "bcryptjs";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { iLogin } from "../../interfaces/login.interfaces";
import jwt from "jsonwebtoken";

const createLoginService = async (loginData: iLogin): Promise<string> => {
    const userRepo = AppDataSource.getRepository(User);

    const user: User | null = await userRepo.findOneBy({
        email: loginData.email,
    });

    if (!user) {
        throw new AppError("Invalid credentials", 403);
    }

    const passMatch = await compare(loginData.password, user.password);

    if (!passMatch) {
        throw new AppError("Invalid credentials", 403);
    }

    const token = jwt.sign({ userName: user.name }, process.env.SECRET_KEY!, {
        expiresIn: "1h",
        subject: user.id,
    });

    return token;
};

export { createLoginService };

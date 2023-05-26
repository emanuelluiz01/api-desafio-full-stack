import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entities/user.entity";
import { AppError } from "../errors";
import { Repository } from "typeorm";

const emailExists = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const userRepository: Repository<User> = AppDataSource.getRepository(User);

    const findEmail = await userRepository.findOneBy({
        email: req.body.email,
    });

    if (findEmail && req.body.email) {
        throw new AppError("Email already exists", 409);
    }

    return next();
};

export { emailExists };

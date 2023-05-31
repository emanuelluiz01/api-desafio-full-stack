import { Request, Response } from "express";
import { iLogin } from "../interfaces/login.interfaces";
import { createLoginService } from "../services/login/createLogin.service";

const loginController = async (
    req: Request,
    res: Response
): Promise<Response> => {
    const dataLogin: iLogin = req.body;

    const token = await createLoginService(dataLogin);

    return res.json({ token });
};

export { loginController };

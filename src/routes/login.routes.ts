import { Router } from "express";
import { loginController } from "../controllers/login.controller";
import { validateDatas } from "../middlewares/validatedDatas.middleware";
import { LoginSchema } from "../schemas/login.schema";

const loginRoute = Router();

loginRoute.post("", validateDatas(LoginSchema), loginController);

export { loginRoute };

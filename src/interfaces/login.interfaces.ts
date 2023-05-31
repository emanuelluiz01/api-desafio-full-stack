import { z } from "zod";
import { LoginSchema } from "../schemas/login.schema";

type iLogin = z.infer<typeof LoginSchema>;

export { iLogin };

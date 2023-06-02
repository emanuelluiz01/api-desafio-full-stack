import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import cors from "cors";
import { usersRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors";
import { contactsRoutes } from "./routes/contacts.routes";
import { loginRoute } from "./routes/login.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use(cors());
app.use("/contacts", contactsRoutes);
app.use("/login", loginRoute);

app.use(handleErrors);
export default app;

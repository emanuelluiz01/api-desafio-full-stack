import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";
import { handleErrors } from "./errors";
import { contactsRoutes } from "./routes/contacts.routes";

const app: Application = express();
app.use(express.json());

app.use("/users", usersRoutes);
app.use("/contacts", contactsRoutes);

app.use(handleErrors);
export default app;

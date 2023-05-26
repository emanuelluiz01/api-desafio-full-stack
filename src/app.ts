import "express-async-errors";
import "reflect-metadata";
import express, { Application } from "express";
import { usersRoutes } from "./routes/users.routes";

const app: Application = express();
app.use(express.json());
app.use("/users", usersRoutes);

app.get("/", (req, res) => res.json("alou"));

export default app;

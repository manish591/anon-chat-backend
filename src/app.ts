import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/users", usersRouter);

export default app;
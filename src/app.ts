import express from "express";
import cors from "cors";
import usersRouter from "./routes/users";
import healthCheckRouter from "./routes/healthcheck";

const app = express();

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());

app.use("/", usersRouter);
app.use("/healthcheck", healthCheckRouter);

export default app;
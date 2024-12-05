import dotenv from "dotenv";
import express from "express";

dotenv.config();

const PORT = process.env.PORT ?? 8000;

const app = express();

app.listen(PORT, function () {
  console.log("App running on PORT", PORT);
});
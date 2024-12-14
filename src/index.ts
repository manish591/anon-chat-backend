import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, function () {
  console.log("App running on PORT", PORT);
});
import { Router } from "express";

const router = Router();

router.get("/healthcheck", function (req, res) {
  res.json({
    message: "success",
    uptime: new Date().getTime()
  });
});
import { Router } from "express";

const router = Router();

router.get("/", function (req, res) {
  res.json({
    message: "success",
    uptime: new Date().getTime()
  });
});

export default router;
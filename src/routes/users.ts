import { Router } from "express";
import { db } from "../db/firestore";

const router = Router();

type MessageBody = {
  username: string,
  text: string,
  senderId: string
}

router.post("/messages", async function (req, res) {
  try {
    const body = req.body as MessageBody;

    if (!body.username || !body.text || !body.senderId) {
      res.json({
        message: "failed",
      });
      return;
    }

    const docRef = db.collection("messages");
    await docRef.add({
      username: body.username,
      text: body.text,
      senderId: body.senderId
    });

    res.json({
      message: "success"
    });
  } catch (err) {
    console.log("Error occured", err);
    res.json({
      message: "error",
    });
  }
});

export default router;
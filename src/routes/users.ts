import { Router } from "express";
import { db } from "../db/firestore";
import { send } from "process";

const router = Router();

/**
 * GET /users/:userid - get user profile
 * POST messages- send message to user
 */

type MessageBody = {
  userId: string,
  text: string,
  senderId: string
}

router.get("/:userid", async function (req, res) {
  try {
    const userid = req.params.userid;

    if (!userid) {
      res.json({
        message: "failed"
      });

      return;
    }

    const docRef = db.collection("users").doc(userid);
    const doc = await docRef.get();

    if (!doc.exists) {
      res.json({
        message: "no docs found"
      })
      return;
    }

    res.json({
      message: "success",
      data: doc.data()
    });
  } catch (err) {
    console.log("Error occured", err);
    res.json({
      message: "error",
    })
  }
});

router.post("/messages", async function (req, res) {
  try {
    const { userId, text, senderId } = req.body as MessageBody;

    if (!userId || !text || !senderId) {
      res.json({
        message: "failed",
      });
      return;
    }

    const docRef = db.collection("messages");
    await docRef.add({
      userId,
      text,
      senderId
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
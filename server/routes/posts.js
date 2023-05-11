import express from "express";

const router = express.Router();

//Complete url : localhost:5000/posts/

router.get("/", (req, res) => {
  res.send("Working");
});

export default router;

import express from "express";
import cors from "cors";
import router from "./api/reviews.js";
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/reviews", router);
app.use("*", (req, res) => {
  res.status(404).json({ error: "Error, route not found" });
});

export default app;

import express from "express";

const reviews = express.Router();

reviews.get("/", (req, res) => {
  res.send("Hello World");
});

export default reviews;

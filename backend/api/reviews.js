import express from "express";
import mongodb from "mongodb";
import dotenv from "dotenv";
import movieModel from "../models/movie.model.js";

dotenv.config();

const DB_Uri = process.env.DB_URI;
const router = express.Router();

//Intializing mongodb client
const MongoClient = new mongodb.MongoClient(DB_Uri, {
  wtimeoutMS: 2500,
  useNewUrlParser: true,
});

//Connecting to mongodb client
MongoClient.connect(async (err, client) => {
  if (err) {
    console.log(" Error connecting to database", err);
  } else {
    console.log("Connected to database");
  }
});

//Routes
router.get("/", async (req, res) => {
  const a = MongoClient.db("movie").collection("reviews");
  const cursour = a.find({});
  const c = await cursour.toArray();

  res.status(200).send(c);
});

router.post("/", async (req, res) => {
  const a = MongoClient.db("movie").collection("reviews");

  try {
    const data = new movieModel(req.body);
    const response = await a.insertOne(data);
    res.status(200).send(response);
  } catch (err) {
    res.status(500).send(err);
  }
});

export default router;

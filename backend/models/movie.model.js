import mongoose from "mongoose";
const { Schema } = mongoose;

const movie = new Schema({
  name: { type: String, required: true, unique: true },
  genre: String,
  review: { type: String, required: true, unique: true },
  year: Number,
  url: String,
  rate: { type: Number, min: 0, max: 5 },
});

const movieModel = mongoose.model("movie", movie);
export default movieModel;

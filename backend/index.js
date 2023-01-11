import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const MongoClient = new mongodb.MongoClient(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
});
const port = process.env.PORT || 8000;

MongoClient.connect((err, client) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  app.listen(port, () => {
    console.log(`listening on port ${port}`);
  });
});

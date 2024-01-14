import express from "express";
import router from "./tasks/tasksRouters.js";
import * as dotenv from 'dotenv';
import redisConnection from "./redis/redis.js";
import connectToDatabase from "./mongoDB/mongoConnection.js";

dotenv.config()
const app = express();
app.use(express.json());

app.use("/",router)

const PORT = process.env.EXPRESS_HOST;

// const PORT = 4003

app.listen(PORT, async ()=> {
  console.log((`Server listening on port: ${PORT}`));
  // checkConnection()
  // connectToDatabase();
  redisConnection()
  connectToDatabase()
});

export default app;
import { createClient } from "redis";
import * as dotenv from "dotenv";
// import chalk from "chalk"
dotenv.config();

const redisPort: number | undefined = process.env.REDIS_PORT ? parseInt(process.env.REDIS_PORT, 10) : undefined;
const RedisClient = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host:process.env.REDIS_HOST,
        port: redisPort
    }
  });
const redisConnection = ()=>{
  RedisClient.connect()
.then(() => console.log(("Connected to Redis🚀🚀")))
.catch((error) => {
  if (error instanceof Error) console.log(error.message);
})}

export default redisConnection;
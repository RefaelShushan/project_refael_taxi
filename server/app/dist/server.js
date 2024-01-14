var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from "express";
import router from "./tasks/tasksRouters.js";
import * as dotenv from 'dotenv';
import redisConnection from "./redis/redis.js";
import connectToDatabase from "./mongoDB/mongoConnection.js";
dotenv.config();
const app = express();
app.use(express.json());
app.use("/", router);
const PORT = process.env.EXPRESS_HOST;
// const PORT = 4003
app.listen(PORT, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log((`Server listening on port: ${PORT}`));
    // checkConnection()
    // connectToDatabase();
    redisConnection();
    connectToDatabase();
}));
export default app;
//# sourceMappingURL=server.js.map
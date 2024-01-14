import express from "express"
import { getAllTasksController } from "./tasksController.js";


const router = express.Router()

// router.get("/",getAllTasksController)
router.get('/', (req, res) => {
  res.send('Hello World!');
});



export default router
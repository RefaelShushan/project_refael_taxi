import express from "express";
const router = express.Router();
// router.get("/",getAllTasksController)
router.get('/', (req, res) => {
    res.send('Hello World!');
});
export default router;
//# sourceMappingURL=tasksRouters.js.map
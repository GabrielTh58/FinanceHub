import { Router } from "express";
import UserController from "../controllers/userController";

const router = Router();
const userController = new UserController()

router.get("/", async (req, res) => {
    res.send("login")
})

router.post("/", async (req, res) => {
    try {
        await userController.create(req, res);
    } catch (error) {
        console.error("Error creating user route:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

export default router;
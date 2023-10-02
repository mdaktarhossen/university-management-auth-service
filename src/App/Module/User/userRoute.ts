import exress from "express";
const router = exress.Router();
import userController from "./userController";

router.post("/create-user", userController.createUser);

export default router;
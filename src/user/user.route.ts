import { Router } from "express";

const router = Router();

import { passport } from "../app"
import { userController } from "./user.controller"

const { login, createUser } = userController;

router.post("/", createUser);
router.post("/uploader")

router.post("/login", passport.authenticate("local"), login)



export { router as userRouter };
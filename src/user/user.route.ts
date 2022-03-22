import { Router } from "express";

const router = Router();

import { passport } from "../app"
import { userController } from "./user.controller"

const { login } = userController;

router.post("/login", passport.authenticate("local"), login)



export { router as userRouter };
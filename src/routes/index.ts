import { Router } from "express";
const router = Router();

import { userRouter } from "../user/user.route";
import { videoRouter } from "../video/video.route";

router.use("/user", userRouter);
router.use("/video", videoRouter)


export { router };
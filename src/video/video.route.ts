import { Router } from "express";
const router = Router();

import { videoController } from "./video.controller";
import { mdMulter } from "../helpers/multer"
import { verifyToken } from "../helpers/verifyToken";

const { uploadVideo } = videoController;

router.post("/upload", mdMulter.single("img"), verifyToken, uploadVideo)





export {
    router as videoRouter
}
import { Router } from "express";
const router = Router();

import { videoController } from "./video.controller";
import { mdmu } from "../helpers/multer"

const { uploadVideo } = videoController;

router.post("/upload", mdmu.single("img"), uploadVideo)





export {
    router as videoRouter
}
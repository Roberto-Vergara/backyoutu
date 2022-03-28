import { Response } from "express";
import { upload } from "../helpers/cloudinary";

class VideoController {
    async uploadVideo(req: any, res: Response) {
        try {
            const uData = req.user;
            res.json({ ok: true, message: "video subido", status: 200 })
        } catch (error) {
            res.json({ ok: false, message: "some error", error })
        }

    }
}

export const videoController = new VideoController();
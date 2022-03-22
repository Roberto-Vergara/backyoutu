
import { v2 } from "cloudinary"
v2.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
})

export const upload = async (path: string) => {
    try {
        const res = await v2.uploader.upload(path);
        if (!res) {
            throw { message: "something goes bad" }
        }
        return { message: "image uploaded" }
    } catch (error) {
        return { error, message: "algo salio mal" }
    }
}
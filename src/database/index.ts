import { createConnection } from "typeorm"
import { Creator } from "../creator/creator.entity";
import { Like } from "../like/like.entity";
import { User } from "../user/user.entity";
import { Video } from "../video/video.entity";


export const connection = async () => {
    try {
        await createConnection({
            type: "mysql",
            host: process.env.HOST,
            port: 3306,
            username: "root",
            password: "password",
            database: "youtu",
            entities: [User, Like, Video, Creator],
            synchronize: true
        })
        console.log("conexion exitosa a la base de datos");

    } catch (error) {
        console.log({ error, message: "error al conectar base de datos" });

    }
}
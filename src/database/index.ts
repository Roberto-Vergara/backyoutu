import { createConnection } from "typeorm"


export const connection = async () => {
    try {
        await createConnection({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "",
            password: "",
            database: "",
            entities: [],
            synchronize: false
        })
        console.log("conexion exitosa a la base de datos");

    } catch (error) {
        console.log({ error, message: "error al conectar base de datos" });

    }
}
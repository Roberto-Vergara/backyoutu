import { NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../user/user.entity";

const verifyToken = async (req: any, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers["authorzation"].split(" ")[1];
        if (!accessToken) throw { error: "tiene que ingresar un token" };

        const at: any = process.env.ACCESS_TOKEN
        const result: any = verify(accessToken, at);
        if (!result) throw { error: "algun error" }
        if (!result.id || !result.email) throw { error: "el token esta mal" };

        const user = await User.findOne(result.id);
        if (!user) throw { error: "el token esta mal" }
        if (user.email !== result.email) throw { error: "el token esta mal" };
        req.user = result;
        return next()
    } catch (error) {
        return res.json({ ok: false, message: "algo salio mal", error })
    }
}

export {
    verifyToken
}
import { Request, Response } from "express";
import { v4 } from "uuid";
import { User } from "./user.entity";
import bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"

class UserController {

    async createUser(req: Request, res: Response) {
        const { name, lastname, password, email } = req.body;
        try {
            const id = v4();
            const hashp: string = await bcrypt.hash(password, 8);
            const createU = User.create({ name, lastname, password: hashp, email, id });
            if (!createU) {
                throw { ok: false, message: "some error" }
            }
            await createU.save()
        } catch (error) {
            return res.json({ error, message: "some error" })
        }

    }

    async becomeUplo(req: Request, res: Response) {
        const id: string = "";
        const { accept } = req.body;
        try {
            if (accept === "yes") {
                const user: any = await User.findOne({ where: { id } })
                user.uploader = true;
                await user;
                return res.json({ ok: true, message: "usuario actualizado" })
            }
            return res.json(null)
        } catch (error) {
            return res.json({ error, message: "someerror" })
        }
    }

    async getUser(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const user: any = await User.findOne({ where: { id } })
            const { email, password, ...rest } = user;
            res.json(rest)
        } catch (error) {
            return res.json({ error, message: "someerror" })
        }
    }

    async login(req: any, res: Response) {
        const { id, name, lastname } = req.user;
        const payload = {
            id, name, lastname
        }
        const at: any = process.env.ACCESS_TOKEN
        const accessToken = jwt.sign(payload, at)
        res.json({ accessToken })

    }
}

export const userController = new UserController();
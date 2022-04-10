import { Request, Response } from "express"
import { User } from "../user/user.entity";
import { Creator } from "./creator.entity";

class CreatorController {

    async createCreator(req: any, res: Response) {
        try {
            const user = req.userT;
            const userCreator: any = await User.findOne(user.id)
            const createCreator = Creator.create({ name: userCreator.name, user: userCreator })
            await createCreator.save()
        } catch (error) {

        }

    }
}

export const creatorController = new CreatorController()
import * as passport from "passport"
import { Strategy } from "passport-local"
import { User } from "../user/user.entity"
import bcrypt from "bcrypt"

const verify = async (email: string, password: string, cb: any) => {
    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return cb(null, false, { message: "email incorrecto" })

        }
        const comP = await bcrypt.compare(password, user.password);
        if (!comP) {
            return cb(null, false, { message: "contraseña incorrecta" })
        }
        const uData = {
            id: user.id,
            name: user.name,
            lastname: user.lastname
        }
        return cb(null, uData)
    } catch (error) {
        return cb(error)
    }
}

const strategy: any = new Strategy({ usernameField: "email" }, verify)


export { strategy }
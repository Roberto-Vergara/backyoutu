import express, { json } from "express";
import cors from "cors"
const app = express();
import passport from "passport"

import { router } from "./routes";
import { strategy } from "./helpers/passport";


app.set("port", process.env.PORT || 4333)


app.use(passport.initialize())
app.use(passport.session())
passport.use(strategy)

app.use(json())
app.use(cors({ origin: "*" }))
app.use(router)

export {
    app,
    passport
}
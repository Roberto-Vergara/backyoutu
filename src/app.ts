import express, { json } from "express";
import cors from "cors"
const app = express();
import passport from "passport"
import session from "express-session";

import { router } from "./routes";
import { deserialize, serialize, strategy } from "./helpers/passport";


app.set("port", process.env.PORT || 4333)

const s: any = process.env.SESSION_SECRET;
app.use(session({
    secret: "musecero",
    resave: false,
    saveUninitialized: true

}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(strategy)
passport.serializeUser(serialize);
passport.deserializeUser(deserialize);

app.use(json())
app.use(cors({ origin: "*" }))
app.use(router)

export {
    app,
    passport
}
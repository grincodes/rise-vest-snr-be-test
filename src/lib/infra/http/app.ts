import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import { v1Router } from "./api/v1"
import { Config } from "../../../config"
import passport from "passport"
import { dataService } from "../db"
import { Strategy as LocalStategy } from "passport-local"
import { authUser, jwtAuth } from "../../../modules/auth/infra/passport/passportUtils"
import { Strategy as JwtStrategy } from "passport-jwt"
import { ExtractJwt } from "passport-jwt"
import cookieParser from "cookie-parser"
import { GenericAppError } from "../../core/logic/AppError"
import { DomainError } from "../../core/logic/DomainError"

const app = express()

const origin = {
  origin: Config.isProduction || Config.isStaginig ? "https://" : "*",
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors(origin))
app.use(helmet())
app.use(cookieParser())
app.use(passport.initialize())

passport.use(
  new LocalStategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    authUser,
  ),
)

passport.use(
  new JwtStrategy(
    {
      // jwtFromRequest: ExtractJwt.fromExtractors([(request: any) => request?.headers.Authentication || request?.headers.authorization || request?.Authentication]),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: Config.JWT_SECRET,
    },
    jwtAuth,
  ),
)

app.get("/", (req, res) => {
  res.send("yo i'm up")
})

app.use("/api/v1", v1Router)

// New api versions can go here

//handle errors
// app.use((error, req, res, next) => {
//   switch (error.constructor) {
//     case GenericAppError.UnexpectedError:
//       res.status(409).json({ message: error.errorValue().message || "Unexpected Error" })
//     case GenericAppError.NotFoundError:
//       res.status(404).json({ message: error.errorValue().message || "Does not exist" })
//     case DomainError:
//       res.status(400).json({ message: error.errorValue().message || "Invalid Request" })

//     default:
//       res.status(500).json({ message: error.errorValue().message || "Internal Server Error" })
//   }
// })

// initialize db
dataService
  .initialize()
  .then(() => {
    console.log("Db💾 connected...")

    app.listen(Config.PORT || 4000, () => {
      console.log(`[App]: Server listening on ${Config.PORT}`)
    })
  })
  .catch((err) => {
    console.log(err.message)
  })

process.on("SIGINT", () => {
  dataService.destroy()
  // Gracefully exit the process
  process.exit(0)
})

export { app }

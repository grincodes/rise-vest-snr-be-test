import * as dotenv from "dotenv"
dotenv.config()
import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"
import { v1Router } from "./api/v1"
import { Config } from "../../../config"

import passport from "passport"
import passportJWT from "passport-jwt"
import { dataService } from "../db"

const app = express()

const origin = {
  origin: Config.isProduction || Config.isStaginig ? "https://" : "*",
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

passport.use()

app.use(cors(origin))
app.use(helmet())

app.get("/", (req, res) => {
  res.send("yo i'm up")
})

app.use("/api/v1", v1Router)

// New api versions can go here

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

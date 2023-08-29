import express from "express"
import { userRouter } from "../../../../modules/users/infra/http/routes"
import { authRouter } from "../../../../modules/auth/infra/http/routes"
import { postRouter } from "../../../../modules/posts/infra/http/routes"

const v1Router = express.Router()

v1Router.get("/", (req, res) => {
  return res.json({ message: "Yo! we're up" })
})

v1Router.use("/auth", authRouter)
v1Router.use("/users", userRouter)
v1Router.use("/posts", postRouter)

export { v1Router }

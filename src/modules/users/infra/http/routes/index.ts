import express from "express"
import { CreateUserDto } from "../../../dto/CreateUserDto"
import { userController } from "../../../useCases"
import "reflect-metadata"
import { middleware } from "../../../../../lib/infra/http"
import { postController } from "../../../../posts/useCases"
import { CreatePostReq } from "../../../../posts/dto/CreatePostReq"
import passport from "passport"

const userRouter = express.Router()

// create user
userRouter.post("/", middleware.validateDto(CreateUserDto), (req: any, res) => {
  userController.execute(req, res, () => userController.createUser())
})

userRouter.get("/", (req: any, res) => {
  userController.execute(req, res, () => userController.getAllPaginatedUsers())
})

userRouter.get("/top3-users", (req: any, res) => {
  userController.execute(req, res, () => userController.getAllPaginatedUsers())
})

//create post
userRouter.post("/:id/posts", [middleware.validateDto(CreatePostReq), middleware.checkAuthToken, passport.authenticate("jwt", { session: false })], (req: any, res) => {
  postController.execute(req, res, () => postController.createPost())
})

userRouter.get("/:id/posts", [middleware.checkAuthToken, passport.authenticate("jwt", { session: false })], (req: any, res) => {
  postController.execute(req, res, () => postController.getUserPaginatedPosts())
})

export { userRouter }

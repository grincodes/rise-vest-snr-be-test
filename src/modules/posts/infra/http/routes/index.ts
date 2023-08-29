import express from "express"
import "reflect-metadata"
import { middleware } from "../../../../../lib/infra/http"
import { CreateCommentReq } from "../../../../comments/dto/CreateCommentReq"
import { commentController } from "../../../../comments/useCases"
import passport from "passport"

const postRouter = express.Router()

//create comment
postRouter.post("/:postId/comments", [middleware.validateDto(CreateCommentReq), middleware.checkAuthToken, passport.authenticate("jwt", { session: false })], (req: any, res) => {
  commentController.execute(req, res, () => commentController.createComment())
})

export { postRouter }

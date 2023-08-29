import { postRepo } from "../../posts/infra/repo"
import { commentRepo } from "../infra/repo"
import { CommentController } from "./CommentController"
import { CommentService } from "./CommentService"

const commentService = new CommentService(commentRepo, postRepo)
const commentController = new CommentController(commentService)

export { commentService, commentController }

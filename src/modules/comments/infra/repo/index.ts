import { Comments } from "../entity/CommentEntity.model"
import { CommentRepo } from "./CommentRepo"

const commentRepo = new CommentRepo(Comments)

export { commentRepo }

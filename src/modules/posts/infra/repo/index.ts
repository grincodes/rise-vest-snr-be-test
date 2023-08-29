import { Posts } from "../entity/PostEntity.model"
import { PostRepo } from "./PostRepo"

const postRepo = new PostRepo(Posts)

export { postRepo }

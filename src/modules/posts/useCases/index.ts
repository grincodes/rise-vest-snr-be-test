import { postRepo } from "../infra/repo"
import { PostController } from "./PostContoller"
import { PostService } from "./PostService"

const postService = new PostService(postRepo)
const postController = new PostController(postService)

export { postService, postController }

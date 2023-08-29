import { BaseController } from "../../../lib/core/infra/BaseController"
import { PostService } from "./PostService"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import "reflect-metadata"

export class PostController extends BaseController {
  private postService: PostService

  constructor(postService: PostService) {
    super()
    this.postService = postService
  }

  async createPost(): Promise<any> {
    const user: any = this.req.user

    if (!user) this.unauthorized()

    //confirms if userId matches authenticated userId
    if (user?.id != this.req.params.id) {
      this.conflict("Authenticated user is different from userId in params")
    }

    const dto = this.req.body
    dto.userId = user.id

    try {
      const result = await this.postService.createPost(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          case DomainError:
            return this.clientError(error.errorValue().message)
          default:
            return this.fail(error.errorValue().message)
        }
      } else {
        return this.ok(this.res, resultVal.getValue())
      }
    } catch (err) {
      this.fail(err)
    }
  }


    async getTop3UsersWithLatestCommentsAndPosts():Promise<any>{
     
    try {
      const result = await this.postService.getTop3UsersWithLatestCommentsAndPosts()
      const resultVal = result.value
      return this.ok(this.res, resultVal.getValue())
    } catch (err) {
      this.fail(err)
    }
  } 

  async getUserPaginatedPosts(): Promise<any> {
    try {
      const dto = this.req.query
      const user: any = this.req.user

      //confirms if userId matches authenticated userId
      if (user?.id != this.req.params.id) {
        this.conflict("Authenticated user is different from userId in params")
      }
      const result = await this.postService.getUserPaginatedPosts(dto, user.id)
      const resultVal = result.value
      return this.ok(this.res, resultVal.getValue())
    } catch (err) {
      this.fail(err)
    }
  }
}

import { BaseController } from "../../../lib/core/infra/BaseController"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import "reflect-metadata"
import { CommentService } from "./CommentService"
import { PostErrors } from "../../posts/domain/PostErrors"

export class CommentController extends BaseController {
  private commentService: CommentService

  constructor(commentService: CommentService) {
    super()
    this.commentService = commentService
  }

  async createComment(): Promise<any> {
    const user: any = this.req.user

    if (!user) {
      return this.unauthorized()
    }

   
    try {

       const postId = this.req.params.postId

       //check if post exists


       const dto = this.req.body
       dto.userId = user?.id
       dto.postId = postId

      const result = await this.commentService.createComment(dto)
      const resultVal = result.value
      if (result.isLeft()) {
        const error = result.value

        switch (error.constructor) {
          case GenericAppError.UnexpectedError:
            return this.conflict(error.errorValue().message)
          case DomainError:
            return this.clientError(error.errorValue().message)
          case PostErrors.PostDoesNotExist:
            return this.notFound(error.errorValue().message)
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
}

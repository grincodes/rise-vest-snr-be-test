import { CreateResponse } from "../../../lib/common/constants"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import { Either, Result, left, right } from "../../../lib/core/logic/Result"
import { AbstractRepo } from "../../../lib/infra/db/AbstractRepo"

import "reflect-metadata"
import { Comments } from "../infra/entity/CommentEntity.model"
import { CreateCommentDto } from "../dto/CreateCommentDto"
import { CommentMap } from "../mappers/CommentMap"
import { Comment } from "../domain/Comment"
import { PostErrors } from "../../posts/domain/PostErrors"
import { PostRepo } from "../../posts/infra/repo/PostRepo"

type Response = Either<GenericAppError.UnexpectedError | PostErrors.PostDoesNotExist | DomainError, Result<Comment> | Result<CreateResponse>>

export class CommentService {
  private commentRepo: AbstractRepo<Comments>
  private postRepo: PostRepo

  constructor(commentRepo: AbstractRepo<Comments>, postRepo: PostRepo) {
    this.commentRepo = commentRepo
    this.postRepo = postRepo
  }

  async createComment(createCommentDto: CreateCommentDto): Promise<Response> {
    try {
      const postExists = await this.postRepo.postExists(createCommentDto.postId)

      if (!postExists) {
        return left(PostErrors.PostDoesNotExist.create()) as Response
      }

      const commentOrError = Comment.create(createCommentDto)

      if (commentOrError.isFailure) {
        return left(DomainError.create(commentOrError.errorValue())) as Response
      }

      const comment = commentOrError.getValue()

      const data = CommentMap.toPersistence(comment)
      const res = await this.commentRepo.create(data)

      return right(
        Result.ok<CreateResponse>({
          id: res.id,
        }),
      )
    } catch (error) {
      return left(error) as Response
    }
  }
}

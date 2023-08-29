import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { Comment } from "../domain/Comment"
import { CreateCommentDto } from "../dto/CreateCommentDto"
import { Comments } from "../infra/entity/CommentEntity.model"
import { v4 as uuid } from "uuid"

export class CommentMap {
  public static dtoToPersistence(dto: CreateCommentDto): Comments {
    return {
      id: uuid(),
      postId: dto.postId,
      userId: dto.userId,
      comment: dto.comment,
    }
  }

  public static toPersistence(comment: Comment): Comments {
    return {
      id: comment.id.toString(),
      userId: comment.userId,
      postId: comment.postId,
      comment: comment.comment,
    }
  }

  public static toDomain(raw: any): Comment {
    const commentOrError = Comment.create(
      {
        userId: raw.userId,
        postId: raw.postId,
        comment: raw.comment,
      },
      new UniqueEntityID(raw.id),
    )

    commentOrError.isFailure ? console.log(commentOrError.error) : ""

    return commentOrError.isSuccess ? commentOrError.getValue() : null
  }
}

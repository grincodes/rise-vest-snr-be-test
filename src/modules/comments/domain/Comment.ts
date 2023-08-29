import { AggregateRoot } from "../../../lib/core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { Result } from "../../../lib/core/logic/Result"
import { Guard } from "../../../lib/core/logic/Guard"
import "reflect-metadata"
import { IsUUID, IsString, IsNotEmpty, MinLength } from "class-validator"
import { Entity } from "../../../lib/core/domain/Entity"

export interface CommentProps {
  userId: string
  postId: string
  content: string
}

export class CommentGuard {
  @IsUUID("4")
  userId: string

  @IsUUID("4")
  postId: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  content: string
}

export class Comment extends Entity<CommentProps> {
  private constructor(props: CommentProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get id(): string {
    return this._id.toString()
  }

  get userId(): string {
    return this.props.userId
  }

  get postId(): string {
    return this.props.postId
  }

  get content(): string {
    return this.props.content
  }

  public static create(props: CommentProps, id?: UniqueEntityID): Result<Comment> {
    const guardResult = Guard.validate(CommentGuard, props)

    if (guardResult) {
      return Result.fail<Comment>(guardResult.errMsg)
    }

    const comment = new Comment(
      {
        ...props,
      },
      id,
    )

    return Result.ok<Comment>(comment)
  }
}

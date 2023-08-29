import { AggregateRoot } from "../../../lib/core/domain/AggregateRoot"
import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { Result } from "../../../lib/core/logic/Result"
import { Guard } from "../../../lib/core/logic/Guard"
import "reflect-metadata"
import { IsUUID, IsString, IsNotEmpty, MinLength } from "class-validator"

export interface PostProps {
  userId: string
  body: string
  title: string
}

export class PostGuard {
  @IsUUID("4")
  userId: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  body: string
}

export class Post extends AggregateRoot<PostProps> {
  private constructor(props: PostProps, id?: UniqueEntityID) {
    super(props, id)
  }

  get postId(): string {
    return this.id.toString()
  }

  get userId(): string {
    return this.props.userId
  }

  get title(): string {
    return this.props.title
  }

  get body(): string {
    return this.props.body
  }

  public static create(props: PostProps, id?: UniqueEntityID): Result<Post> {
    const guardResult = Guard.validate(PostGuard, props)

    if (guardResult) {
      return Result.fail<Post>(guardResult.errMsg)
    }

    const post = new Post(
      {
        ...props,
      },
      id,
    )

    return Result.ok<Post>(post)
  }
}

import { UniqueEntityID } from "../../../lib/core/domain/UniqueEntityID"
import { Post } from "../domain/Post"
import { Posts } from "../infra/entity/PostEntity.model"

export class PostMap {
  public static toPersistence(post: Post): Posts {
    return {
      id: post.id.toString(),
      title: post.title,
      body: post.body,
      userId: post.userId,
    }
  }

  public static toDomain(raw: any): Post {
    const postOrError = Post.create(
      {
        title: raw.title,
        body: raw.body,
        userId: raw.userId,
      },
      new UniqueEntityID(raw.id),
    )

    postOrError.isFailure ? console.log(postOrError.error) : ""

    return postOrError.isSuccess ? postOrError.getValue() : null
  }
}

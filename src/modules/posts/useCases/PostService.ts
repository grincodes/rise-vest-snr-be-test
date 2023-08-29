import { CreateResponse, LatestPosts, UserPostsPaginatedResponse } from "../../../lib/common/constants"
import { GenericAppError } from "../../../lib/core/logic/AppError"
import { DomainError } from "../../../lib/core/logic/DomainError"
import { Either, Result, left, right } from "../../../lib/core/logic/Result"
import { Post } from "../domain/Post"
import { CreatePostDto } from "../dto/CreatePostDto"
import { PostRepo } from "../infra/repo/PostRepo"
import { PostMap } from "../mappers/PostMap"
import "reflect-metadata"

type Response = Either<GenericAppError.UnexpectedError | DomainError, Result<boolean> | Result<Post> | Result<CreateResponse> |Result<LatestPosts[]>  |Result<UserPostsPaginatedResponse>>

export class PostService {
  private postRepo: PostRepo

  constructor(postRepo: PostRepo) {
    this.postRepo = postRepo
  }

  async createPost(createPostDto: CreatePostDto): Promise<Response> {
    try {
      const postOrError = Post.create(createPostDto)

      if (postOrError.isFailure) {
        return left(DomainError.create(postOrError.errorValue())) as Response
      }
      const post = postOrError.getValue()

      const data = PostMap.toPersistence(post)

      const res = await this.postRepo.create(data)

      return right(
        Result.ok<CreateResponse>({
          id: res.id,
        }),
      )
    } catch (error) {
      return left(error) as Response
    }
  }

  async postExists(id: string): Promise<Response> {
    try {
      const res = await this.postRepo.postExists(id)
      return right(Result.ok<boolean>(res))
    } catch (error) {
      return left(error) as Response
    }
  }

  async getUserPaginatedPosts(dto: any, userId: string): Promise<Response> {
    try {
      const res = await this.postRepo.findAllPostsByUser(dto, userId)
      return right(Result.ok<UserPostsPaginatedResponse>(res))
    } catch (error) {
      return left(error) as Response
    }
  }

    async getTop3UsersWithLatestCommentsAndPosts():Promise<Response>{
       try {
      const res = await this.postRepo.getTop3UsersWithLatestCommentsAndPosts()

     

      return right(Result.ok<LatestPosts[]>(res))
    } catch (error) {
      return left(error) as Response
    }
  }
  
}
